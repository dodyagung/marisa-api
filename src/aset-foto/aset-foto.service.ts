import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateAsetFotoDto } from './dto/create-aset-foto.dto';
import { UpdateAsetFotoDto } from './dto/update-aset-foto.dto';
import { AsetFoto } from './entities/aset-foto.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import {
  ListBucketsCommand,
  ListObjectsV2Command,
  PutObjectCommand,
  S3Client,
} from '@aws-sdk/client-s3';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AsetFotoService {
  constructor(
    @InjectRepository(AsetFoto)
    private asetFotoRepository: Repository<AsetFoto>,
    private configService: ConfigService,
  ) {}

  // create(createAsetFotoDto: CreateAsetFotoDto) {
  //   return 'This action adds a new asetFoto';
  // }

  // findAll() {
  //   return `This action returns all asetFoto`;
  // }

  async findOne(id: number): Promise<AsetFoto[] | null> {
    const result = await this.asetFotoRepository.find({
      select: {
        aset_foto_id: true,
        filename: true,
        url: true,
      },
      where: {
        aset_id: id,
      },
    });

    if (result.length === 0) {
      throw new NotFoundException();
    }

    return result;
  }

  async update(
    id: number,
    file: Express.Multer.File,
    updateAsetFotoDto: UpdateAsetFotoDto,
  ) {
    const S3 = new S3Client({
      region: 'auto',
      endpoint: this.configService.get<string>('R2_URL_API'),
      credentials: {
        accessKeyId: this.configService.get<string>('R2_ACCESS_KEY_ID'),
        secretAccessKey: this.configService.get<string>('R2_ACCESS_KEY_SECRET'),
      },
    });
    const input = {
      Body: file.buffer,
      Bucket: 'pandawa',
      Key: file.originalname,
      ContentType: file.mimetype,
    };
    const command = new PutObjectCommand(input);
    const response = await S3.send(command);

    if (response.$metadata.httpStatusCode == 200) {
      const res = this.asetFotoRepository.save({
        aset_id: id,
        filename: file.originalname,
        url:
          this.configService.get<string>('R2_URL_PUBLIC') +
          '/' +
          encodeURIComponent(file.originalname),
      });

      return res;
    } else {
      throw new InternalServerErrorException();
    }
  }

  remove(id: number) {
    return this.asetFotoRepository.delete(id);
  }
}

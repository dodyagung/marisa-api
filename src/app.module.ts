import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AsetModule } from './aset/aset.module';
import { KategoriModule } from './kategori/kategori.module';
import { PerusahaanModule } from './perusahaan/perusahaan.module';
import { ProsesModule } from './proses/proses.module';
import { StatusModule } from './status/status.module';
import { NotifikasiModule } from './notifikasi/notifikasi.module';
import { SewaModule } from './sewa/sewa.module';
import { AsetDetailModule } from './aset-detail/aset-detail.module';
import { AsetFotoModule } from './aset-foto/aset-foto.module';
import { AsetLogModule } from './aset-log/aset-log.module';
import { AttachmentModule } from './attachment/attachment.module';
import { DokumenModule } from './dokumen/dokumen.module';
import { FaqModule } from './faq/faq.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DATABASE_HOST'),
        port: 3306,
        username: configService.get<string>('DATABASE_USERNAME'),
        password: configService.get<string>('DATABASE_PASSWORD'),
        database: 'personal',
        autoLoadEntities: true,
        ssl: { rejectUnauthorized: true },
      }),
    }),
    AuthModule,
    UserModule,
    AsetModule,
    KategoriModule,
    PerusahaanModule,
    ProsesModule,
    StatusModule,
    NotifikasiModule,
    SewaModule,
    AsetDetailModule,
    AsetFotoModule,
    AsetLogModule,
    AttachmentModule,
    DokumenModule,
    FaqModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

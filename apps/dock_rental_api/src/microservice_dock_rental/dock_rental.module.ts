import { Module } from '@nestjs/common';
import { DockRentalController } from './dock_rental.controller';
import { DockRentalService } from './dock_rental.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from '../config/configuration';
import { Dock } from '../modules/dock/entities/dock.entity';
import { LeaseAgreement } from '../modules/lease-agreement/entities/lease-agreement.entity';
import { ShippingCompany } from '../modules/shipping-company/entity/shipping-company.entity';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration]
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('host'),
        port: configService.get('port'),
        username: configService.get('username'),
        password: configService.get('password'),
        database: configService.get('database'),
        entities: [Dock, LeaseAgreement, ShippingCompany],
        synchronize: false,
        migrationsRun: false
      }),
    })
  ],
  controllers: [DockRentalController],
  providers: [DockRentalService],
})
export class DockRentalModule { }


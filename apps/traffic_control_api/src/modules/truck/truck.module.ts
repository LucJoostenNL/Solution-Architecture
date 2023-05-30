import { Module } from '@nestjs/common';
import { TruckController } from './truck.controller';
import { TruckService } from './truck.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Truck } from './truck.entity';
import { ITruckService } from '../../interfaces/ITruck.service';

@Module({
  imports: [TypeOrmModule.forFeature([Truck])],
  providers: [
    {
      provide: ITruckService,
      useClass: TruckService
    }
  ],
  controllers: [TruckController]
})
export class TruckModule {
  // public configure(consumer: MiddlewareConsumer) {
  //   consumer
  //     .apply(AuthMiddleware)
  //     .forRoutes({ path: 'dock', method: RequestMethod.GET }, { path: 'dock', method: RequestMethod.PUT });
  // }
}

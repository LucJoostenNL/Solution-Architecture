import { Test, TestingModule } from '@nestjs/testing';
import { TrafficControlController } from './traffic-control.controller';
import { TrafficControlService } from './traffic-control.service';

describe('TrafficControlController', () => {
  let trafficControlController: TrafficControlController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TrafficControlController],
      providers: [TrafficControlService],
    }).compile();

    trafficControlController = app.get<TrafficControlController>(TrafficControlController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(trafficControlController.getHello()).toBe('Hello World!');
    });
  });
});

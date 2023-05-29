import { Injectable } from '@nestjs/common';
import { TrafficPlanning } from './trafficPlanning.model';
import { ITrafficPlanningService } from '../interfaces/ITrafficPlanning';
import { DeleteResult } from 'typeorm';

@Injectable()
export class TrafficPlanningService implements ITrafficPlanningService {
  createTrafficPlanning(TrafficPlanning: TrafficPlanning): Promise<TrafficPlanning> {
    throw new Error('Method not implemented.');
  }
  getTrafficPlanningById(id: number): Promise<TrafficPlanning> {
    throw new Error('Method not implemented.');
  }
  getAllTrafficPlannings(): Promise<TrafficPlanning[]> {
    throw new Error('Method not implemented.');
  }
  updateTrafficPlanningById(id: number, updateTrafficPlanning: TrafficPlanning): Promise<TrafficPlanning> {
    throw new Error('Method not implemented.');
  }
  deleteTrafficPlanningById(id: number): Promise<DeleteResult> {
    throw new Error('Method not implemented.');
  }

}
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult, UpdateResult } from 'typeorm';
import { IDockService } from '../../interfaces/IDock.service';
import { DockDTO } from './dto/dock.dto';
import { CreateDockDTO } from './dto/create-dock.dto';
import { Dock } from './entities/dock.entity';


@Injectable()
export class DockService implements IDockService {

  constructor(@InjectRepository(Dock) private readonly repo: Repository<Dock>) { }

  public async getDockById(id: number): Promise<DockDTO> {
    return DockDTO.fromEntity(await this.repo.findOne({ where: { id: id } }));
  }

  public async getAllDocks(): Promise<Array<DockDTO>> {
    return await this.repo.find().then((docks: Array<Dock>) => docks.map(d => DockDTO.fromEntity(d)));
  }

  public async createDock(dto: CreateDockDTO): Promise<Dock> {
    const dock = this.repo.create(dto);
    return await this.repo.save(dock);
  }

  public async updateDockById(id: number, updateDock: CreateDockDTO): Promise<UpdateResult> {
    return await this.repo.update(id, updateDock)
  }

  public async deleteDockById(id: number): Promise<DeleteResult> {
    return await this.repo.delete(id)
  }
}
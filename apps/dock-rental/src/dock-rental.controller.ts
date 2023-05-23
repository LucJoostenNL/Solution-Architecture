import { Controller, Get } from '@nestjs/common';
import { DockRentalService } from './dock-rental.service';

@Controller()
export class DockRentalController {
  constructor(private readonly dockRentalService: DockRentalService) {}

  @Get()
  getHello(): string {
    return this.dockRentalService.getHello();
  }
}

import { IsNotEmpty } from "class-validator";
import { Dock } from "../../dock/dock.entity";
import { Ship } from "../../ship/ship.entity";
import { Truck } from "../../truck/truck.entity";
import { Tugboat } from "../../tugboat/tugboat.entity";

export class CreatePassageDTO {

  @IsNotEmpty()
  public readonly ship: Ship;

  @IsNotEmpty()
  public readonly truck: Truck;

  @IsNotEmpty()
  public readonly dock: Dock;

  @IsNotEmpty()
  public readonly tugboats: Array<Tugboat>;

  @IsNotEmpty()
  public readonly arrival: Date;

  @IsNotEmpty()
  public readonly departure: Date;

  constructor(ship: Ship, truck: Truck, dock: Dock, tugboats: Array<Tugboat>, arrival: Date, departure: Date) {
    this.ship = ship;
    this.truck = truck;
    this.dock = dock;
    this.tugboats = tugboats;
    this.arrival = arrival;
    this.departure = departure;
  }
}
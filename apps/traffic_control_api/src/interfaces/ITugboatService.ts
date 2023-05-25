import { Tugboat } from "../models/Tugboat.model";

export interface ITugboatService {
  createTugboat(Tugboat: Tugboat): void;
  getTugboatById(id: number): Tugboat;
  getAllTugboats(): Array<Tugboat>;
  updateTugboatById(id: number, updateTugboat: Tugboat): void;
  deleteTugboatById(id: number): void;
}
import { Floor } from "../floor/Floor";

export type Location = {
  createdAt: Date;
  floor?: Floor | null;
  id: string;
  roomNumber: string | null;
  updatedAt: Date;
};

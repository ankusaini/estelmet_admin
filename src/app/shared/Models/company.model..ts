
import { Warehouse } from "src/app/shared/Models/warehouse";

export interface Company {
  id: number;
  warehouse: Warehouse;
  name: string;
  mobile: string;
  email: string;
  gst: string;
  address: string;
  country: string;
  state: string;
  city: string;
  pincode: string;
}
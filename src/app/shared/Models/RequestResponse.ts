import { Warehouse } from 'src/app/shared/Models/warehouse';
import { Company } from 'src/app/shared/Models/company.model.';
import { Product } from 'src/app/shared/Models/product.model.';
import { Grn, Purchase } from 'src/app/shared/Models/purchase.model';
import {
  Sales,
  Invoice,
  DeliveryOrder
} from 'src/app/shared/Models/sales.model';
import { CustomerOrder } from './customer-order.model';
import { SalesLead } from './salesLead.model';

// export class Request {
//   purchase: Purchase;
//   grn: Grn;
//   sales: Sales;
//   deliveryOrder: DeliveryOrder;
//   invoice: Invoice;
//   productList: Product[];
//   constructor() {
//     this.purchase = null;
//     this.grn = null;
//     this.sales = null;
//     this.deliveryOrder = null;
//     this.invoice = null;
//     this.productList = [];
//   }
// }
export interface RequestP {
  purchase?: Purchase;
  grn?: Grn;
  sales?: Sales;
  salesLead?: SalesLead;
  customerOrder?: CustomerOrder;
  deliveryOrder?: DeliveryOrder;
  invoice?: Invoice;
  productList?: Product[];
  warehouse?: Warehouse;
}

export interface ResponseP {
  purchase: Purchase;
  grn: Grn;
  sales: Sales;
  salesLead: SalesLead;
  salesLeadList: SalesLead[];
  customerOrder: CustomerOrder;
  customerOrderList: CustomerOrder[];
  deliveryOrder: DeliveryOrder;
  invoice: Invoice;
  purchaseList: Purchase[];
  grnList: Grn[];
  salesList: Sales[];
  deliveryOrderList: DeliveryOrder[];
  invoiceList: Invoice[];
  productList: Product[];
  company: Company;
  warehouse: Warehouse;
  status: string;
  timestamp: Date;
  message: string;

}

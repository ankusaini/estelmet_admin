import { Status } from 'src/app/shared/Models/user.model';

export class Purchase {
  id: string;
  purchaseHistory: PurchaseHistory[];
  grn: Grn[];
  type: PurchaseType;
  lotType: LotType;
  status: Status;
  employeeId: string;
  supplierId: string;
  transportId: string;
  sourceCompanyId: string;
  sourceWarehouseId: string;
  destinationCompanyId: string;
  destinationWarehouseId: string;
  expectedDate: string;
  title: string;
  remarks: string;
  totalPrice: string;
  grossWt: string;
  netWt: string;
  materialDescription: string;
  lorryType: string;
  coilsBundle: string;
  lorryNumber: string;
  productCategory: string;
  productShape: string;
  containerNumber: string;
}

export interface PurchaseHistory {
  purchaseHistoryId: string;
  purchaseId: string;
  purchaseType: PurchaseType;
  createdBy: string;
  createdDate: Date;
  lastModifiedBy: string;
  lastModifiedDate: string;

}

export interface Grn {
  grnId: string;
  status: Status;
  grnType: LotType;
  purchaseId: string;
  materialTransferId: string;
  name: string;
  invoiceNo: string;
  invoiceDate: string;
  materialDescription: string;
  invoiceGrossWeight: string;
  invoiceNetWeight: string;
  grossWeight: string;
  netWeight: string;
  coilsBundles: string;
  transportRecieptNo: string;
  containerNumber: string;
  driverName: string;
  vehicleNo: string;
  vehicleType: string;
  dMobile: string;
  dLicence: string;
  weighingSlipNo: string;
  vehicleLoadedWeight: string;
  materialNetWeightslip: string;
  location: string;
  vehicleTareWeight: string;
  jobChalan: string;
  dateJobChalan: string;
  locationjobChalan: string;
  sourceCompanyId: string;
  sourceWarehouseId: string;
  destinationCompanyId: string;
  destinationWarehouseId: string;
  supplierId: string;
  transportId: string;
  weighingCompanyId: string;
  transferChalanNumber: string;
  transferChalanDate: string;
  createdBy: string;
  createdDate: Date;
  lastModifiedBy: string;
  lastModifiedDate: string;

}

export enum PurchaseType {
  MATERIAL_REQURIMENT = 'MATERIAL_REQURIMENT',
  PURCHASE_CONFIRMATION = 'PURCHASE_CONFIRMATION',
  PURCHASE_ORDER = 'PURCHASE_ORDER',
  DELETED = 'DELETED',
  COMPLETED = 'COMPLETED',
  LOT = 'LOT'
}

export enum LotType {
  WITHOUT_PC = 'WITHOUT_PC',
  WITH_PC = 'WITH_PC',
  JOB_WORK_SELF = 'JOB_WORK_SELF',
  JOB_WORK_OTHER = 'JOB_WORK_OTHER',
  MATERIAL_TRANSFER = 'MATERIAL_TRANSFER',
  DELETED = 'DELETED',
  COMPLETED = 'COMPLETED',
}

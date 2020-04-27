import { Warehouse } from 'src/app/shared/Models/warehouse';
import { Company } from 'src/app/shared/Models/company.model.';

export class Product {
  productId: string;
  product: Product;
  childProducts: Product[];
  warehouse: Warehouse;
  company: Company;
  productType: ProductType;
  productCategory: ProductCategory;
  productShape: ProductShape;
  productClass: ProductClass;
  productFinish: ProductFinish;
  productCoating: ProductCoating;
  productPackaging: ProductPackaging;
  productDefect: ProductDefect;
  productAnnealing: ProductAnnealing;
  productOiling: ProductOiling;
  productOrigin: ProductOrigin;
  productSurfaceCoating: ProductSurfaceCoating;
  temperMin: ProductTemper;
  temperMax: ProductTemper;
  productStage: ProductStage;
  priceHide: string;
  status: Status;
  purchaseId: string;
  salesId: string;
  deliveryOrderId: string;
  thicknessMin: string;
  thicknessMax: string;
  widthMin: string;
  widthMax: string;
  lengthMin: string;
  lengthMax: string;
  lengthToBeCut: string;
  widthToBeCut: string;
  hardnessMin: ProductHardness;
  hardnessMax: ProductHardness;
  heigth: string;
  field: string;
  gwt: string;
  nwt: string;
  gwtkata: string;
  nwtkata: string;
  other: string;
  rowLocation: string;
  columnLocation: string;
  remarks: string;
  grnId: string;
  packagingType: string;
  materialHSNSACCode: string;
  materialPricePerKG: string;
  materialTotalAmountInWords: string;
  materialPriceValue: number;
  description: string;
  createdBy: string;
  createdDate: Date;
  lastModifiedBy: string;
  lastModifiedDate: Date;
  gpId: string;
}


export enum Status {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  ONHOLD = 'ONHOLD',
  PROCESSED='PROCESSED'
}


export interface ProductCategory {
  id?: number;
  productCategory?: string;
  description?: string;
  parentId?: string;

}


export interface ProductShape {
  id: number;
  productShape: string;
  description?: string;
  parentId?: string;

}


export interface ProductType {
  id: number;
  productType: string;
  description: string;
}


export interface ProductClass {
  id: number;
  productClass: string;
  description?: string;
}



export interface ProductCoating {
  id: number;
  productCoating: string;
  description: string;
}


export interface ProductDefect {
  id: number;
  productDefect: string;
  description: string;
}



export interface ProductOrigin {
  id: number;
  productOrigin: string;
  description: string;
}



export interface ProductOiling {
  id: number;
  productOiling: string;
  description: string;
}


export interface ProductSurfaceCoating {
  id: number;
  productSurfaceCoating: string;
  description: string;
}



export interface ProductAnnealing {
  id: number;
  productAnnealing: string;
  description: string;
}



export interface ProductFinish {
  id: number;
  productFinish: string;
  description: string;
}


export interface ProductTemper {
  id: number;
  productTemper: string;
  description: string;
}

export interface ProductHardness {
  id: number;
  productHardness: string;
  description: string;
}




export interface ProductPackaging {
  id: number;
  productPackaging: string;
  description: string;
}



export enum ProductStage {
  TEMP = 'TEMP',
  TRANFERRING = 'TRANFERRING',
  ACTIVE = 'ACTIVE',
  JOB_WORK_OTHERS = 'JOB_WORK_OTHERS',
  UNDER_PROCESSING = 'UNDER_PROCESSING',
  PROCESSED = 'PROCESSED',
  SOLD_OUT = 'SOLD_OUT',
  MAILED_TO_CUSTOMER = 'MAILED_TO_CUSTOMER',
  UPLOADED_ON_WEBSITE = 'UPLOADED_ON_WEBSITE',
  UPLOADED_FOR_AUCTION = 'UPLOADED_FOR_AUCTION',
  CONFIRMED_BY_CUSTOMER = 'CONFIRMED_BY_CUSTOMER',
  DELETED = 'DELETED',
  REJECTED='REJECTED'
}


export enum ProcessingType {
  SHEARING = 'SHEARING',
  BLANKING = 'BLANKING',
  ASSORTING = 'ASSORTING',
  PACKAGING = 'PACKAGING'
}


export enum PriorityLevel {
  IMMEDIATE = 'IMMEDIATE',
  ONE_DAY = 'ONE_DAY',
  TWO_DAY = 'TWO_DAY',
  THREE_DAY = 'THREE_DAY',
  MORE_THEN_THREE_DAY = 'MORE_THEN_THREE_DAY'
}

export class ProductFilter {
  status: string;
  productStage: string;
  offset: number;
  limit: number;
  thicknessMin: string;
  thicknessMax: string;
  widthMin: string;
  widthMax: string;
  lengthMin: string;
  lengthMax: string;
  productCategory: string;
  productClass: string;
  productShape: string;
  productTemper: string;
  productFinish: string;
  productCoating: string;
  lessThanNtWt: string;
  greaterThanNtWt: string;
  warehouse: string;
}

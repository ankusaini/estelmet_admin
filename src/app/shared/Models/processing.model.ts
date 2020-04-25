import { ProductCategory, Product } from 'src/app/shared/Models/product.model.';

export interface Processing {
  productProcessingId?: string;
  contractorId?: string;
  warehouseId?: string;
  productCategory?: ProductCategory;
  customerCompanyId?: string;
  companyId?: string;
  machineDetailId?: string;
  productList?: Product[];
  status?: string;
  processingType?: string;
  jobWorkType?: string;
  priorityLevel?: string;
  createdBy?: string;
  createdDate?: string;
  lastModifiedBy?: string;
  lastModifiedDate?: string;
}

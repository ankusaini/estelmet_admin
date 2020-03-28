import {
  ProductTemper,
  ProductCoating,
  ProductCategory
} from 'src/app/shared/Models/product.model.';

export class Price {
  id: string;
  thicknessMin: string;
  thicknessMax: string;
  widthMin: string;
  widthMax: string;
  temperMin: ProductTemper;
  temperMax: ProductTemper;
  productCoating: ProductCoating;
  productCategory: ProductCategory;
  price: string;
}

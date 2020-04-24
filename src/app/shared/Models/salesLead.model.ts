export interface SalesLead {
    salesLeadId?: number;
    salesLeadProductId?: SalesLeadProduct[];
    customerId?: number;
    customerName?: string;
    customerCompany?: string;
    customerMobile?: string;
    warehouseId?: string;
}

export interface SalesLeadProduct {
    salesLeadProductId?: number;
    salesLeadId?: number;
    productCategory?: string;
    thicknessMin?: string;
    thicknessMax?: string;
    widthMin?: string;
    widthMax?: string;
    lengthMin?: string;
    lengthMax?: string;
    temperMin?: string;
    temperMax?: string;
    productCoating?: string;
    quantity?: string;
}
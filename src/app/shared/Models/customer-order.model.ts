export interface CustomerOrder {
    customerOrderId?: number;
    sellerCompanyName ?: string;
    sellerAddress ?: string;
    sellerPANNo ?: string;
    sellerGSTNo ?: string;
    sellerStateCode ?: string;
    buyerCompanyName ?: string;
    buyerAddress ?: string;
    buyerPANNo ?: string;
    buyerGSTNo ?: string;
    buyerStateCode ?: string;
    customerOrderNo ?: string;
    customerOrderDate ?: string;
    customerOrderValidity ?: string;
    gstInvoice ?: string;
    loadingUnloadingCharges ?: string;
    packagingCharges ?: string;
    deliveryCharges ?: string;
    anyOtherCharges ?: string;
    modeofPayment ?: string;
    paymentTerms ?: string;
    creditLimit ?: string;
    currentOutstanding ?: string;
}
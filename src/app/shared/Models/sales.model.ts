

import { Status } from "src/app/shared/Models/user.model";

export class Sales {
  id: string;
  salesHistory: SalesHistory[];
  deliveryOrder: DeliveryOrder[];
  type: SalesType;
  salesOfferType: SalesOfferType;
  status: Status;
  employeeId: string;
  customerId: string;
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
  totalQuantity: string;
  grossQuantity: string;
  packaging: string;
  regionPreffered: string;
  location: string;
  isTreadLeadBuy: boolean;
  gstInvoice: string;
  loadingUnloadingCharges: string;
  packagingCharges: string;
  deliveryCharges: string;
  anyOtherCharges: string;
  contactPersonName: string;
  contactPersonMobile: string;
  contactPersonWhatsapp: string;
  contactPersonEmail: string;
  thicknessRange: string;
  widthRange: string;
}

export class SalesHistory {
    salesHistoryId: string;
    salesId: string;
    salesType: SalesType;
    createdBy: string;
    createdDate: string;
    lastModifiedBy: string;
    lastModifiedDate: string;
    constructor() {
        this.salesHistoryId = '';
        this.salesId = '';
        this.salesType = null;
        this.createdBy = '';
        this.createdDate = '';
        this.lastModifiedBy = '';
        this.lastModifiedDate = '';
    }
}

export class DeliveryOrder {
    deliveryOrderId: string;
    status: Status;
    deliveryOrderType: SalesType;
    salesId: string;
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
    driverName: string;
    vehicleNo: string;
    vehicleType: String;
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
    customerId: string;
    transportId: string;
    weighingCompanyId: String;
    transferChalanNumber: string;
    invoice: Invoice;
    createdBy: string;
    createdDate: Date;
    lastModifiedBy: string;
    lastModifiedDate: string;
    kataWeight: string;

}

export class Invoice {
    invoiceId: string;
    driverName: string;
    companyCINNo: string;
    dueDate: string;
    buyersOrderNo: string;
    supplierRefNo: string;
    despatchLRNo: string;
    bunkerDeliveryNote: string;
    paymentTerm: string;
    placeOfSupply: string;
    buyersOrderDate: string;
    supplierRefDate: string;
    despatchLRDate: string;
    bunkerDeliveryDate: string;
    sellerCompanyName: string;
    buyerCompanyName: string;
    transporter: string;
    vehicleNumber: string;
    sourceGrossWt: string;
    buyerAddress: string;
    buyerPANNo: string;
    buyerGSTNo: string;
    buyerStateCode: string;
    sellerAddress: string;
    sellerPANNo: string;
    sellerGSTNo: string;
    sellerStateCode: string;
    transportReciept: string;
    containerNumber: string;
    invoicenetWt: string;
    mobileLicence: string;
    invoicematerialDescription: string;
    materialTotalAmount: number;
    materialTotalQuantity: string;
    materialHSNSACCode: string;
    materialPricePerKG: string;
    materialTotalAmountInWords: string;
    enterCGST: number;
    enterSGST: number;
    enterIGST: number;
    totalGST: number;
    totalInvoiceValueWithGST: number;
    gstTotalAmountInWords: string;
    nameOfBeneficiary: string;
    bankName: string;
    branchName: string;
    accountNo: string;
    swiftCodeNumber: string;
    IFSCCode: string;
    accountType: string;
    buyerShipAddr1: string;
    buyerShipAddr2: string;
    buyerShipState: string;
    buyerShipCity: string;
    buyerShipPincode: string;
    eWayBillNo: string;
    eWayBillDate: string;
    roundOff: number;
    tcs: number;
    compCess: number;

}

export enum SalesType {
    SALES_OFFER_LOT = 'SALES_OFFER_LOT',
    TRADE_LEAD_LOT = 'TRADE_LEAD_LOT',
    AUCTION_LOT = 'AUCTION_LOT',
    TRADE_LEAD_BUY = 'TRADE_LEAD_BUY',
    TRADE_LEAD_SELL = 'TRADE_LEAD_SELL',
    LOADING_SLIP = 'LOADING_SLIP',
    SALES_CONFIRMATION = 'SALES_CONFIRMATION',
    DELIVERY_ORDER = 'DELIVERY_ORDER',
    SALES_INVOICE = 'SALES_INVOICE',
    DELETED = 'DELETED',
    COMPLETED = 'COMPLETED'
}

export enum SalesOfferType {
    GENERAL_OFFER = 'GENERAL_OFFER',
    LATEST_OFFER = 'LATEST_OFFER',
    HOT_OFFER = 'HOT_OFFER',
    GENERAL_OFFER_BUY = 'GENERAL_OOFER_BUY'
}

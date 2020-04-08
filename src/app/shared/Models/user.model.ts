// personal detail
export interface User extends UserDetail {
}

export interface UserDetail {
    id?: string;
    username?: string;
    userDetialId?: string;
    firstName?: string;
    lastName?: string;
    mobile?: string;
    emailId?: string;
    userRole?: UserRole;
    password?: string;
    image?: string;
    status?: Status;
    roles?: string[];
    privileges?: string[];
    businessDetails?: BusinessDetails[];
    userGroup?: UserGroup[];
    userProductPreference?: UserProductPreference[];
    keyPerson?: KeyPerson[];
    annualTurnover?: AnnualTurnover[];
}

export enum Status {
    PENDING = 'PENDING',
    APPROVED = 'APPROVED',
    REJECTED = 'REJECTED',
    ONHOLD = 'ONHOLD'
}

export enum UserRole {
    ADMIN = 'ADMIN',
    SUPER_ADMIN = 'SUPER_ADMIN',
    AUTH_ADMIN = 'AUTH_ADMIN',
    EMPLOYEE = 'EMPLOYEE',
    CUSTOMER = 'CUSTOMER',
    SUPPLIER = 'SUPPLIER',
    AGENT = 'AGENT',
    TRANSPORTER = 'TRANSPORTER',
    CONTRACTOR = 'CONTRACTOR'
}

export interface EmployeeDetail {
    employeeDetailId?: string;
    name?: string;
    mobile?: string;
    email?: string;
    dob?: string;
    bloodGroup?: string;
    designation?: string;
    address?: string;
    fatherName?: string;
    motherName?: string;
    spouseName?: string;
    sibbling?: string;
    occupation?: string;
    qualification?: string;
    specialization?: string;
    university?: string;
    passingYear?: string;
    marks?: string;
    previousCompany?: string;
    pDesignation?: string;
    currentLocation?: string;
    skills?: string;
    experience?: string;

}

// comPANY DETAIL
export interface BusinessDetails {
    businessDetailId?: string;
    companyName?: string;
    address1?: string;
    address2?: string;
    gst?: string;
    otp?: string;
    numberOfEmployees?: string;
    country?: string;
    state?: string;
    city?: string;
    pinCode?: string;
    mobile?: string;
    landline?: string;
    businessEmail?: string;
    creditLimit?: string;
    currentOutstanding?: string;
    daysPayableOutstanding?: string;
}

export interface AnnualTurnover {
    annualTurnoverId?: string;
    year?: string;
    turnover?: string;

}

export interface KeyPerson {
    keyPersonId?: string;
    name?: string;
    designation?: string;
    mobile1?: string;
    mobile2?: string;
    email1?: string;
    email2?: string;

}

export interface UserProductPreference {
    userProductPreferenceId?: string;
    productType?: string;
    productCategory?: string;
    productShape?: string;
    productClass?: string;
    temperMin?: string;
    temperMax?: string;
    hardnessMin?: string;
    hardnessMax?: string;
    status?: Status;
    productStage?: ProductStage;
    priceHide?: string;
    heigth?: string;
    gwt?: string;
    nwt?: string;
    remarks?: string;
    title?: string;
    thicknessMin?: string;
    thicknessMax?: string;
    widthMin?: string;
    widthMax?: string;
    lengthMin?: string;
    lengthMax?: string;
    monthlyRequirement?: string;
}

export enum ProductStage {
    CART, WISHLIST, ORDER, PRODUCT_PREFERENCE, SALES, PURCHASE, REQUEST_QUOTATION
}
export interface SecurityQuestion {
    securityQuestionId?: string;
    securityQuestion?: string;
    securityAnswer?: string;
}

export interface FrequentlyAskedQuestions {
    frequentlyAskedQuestionsId?: string;
    frequentlyAskedQuestion?: string;
    frequentlyAskedAnswer?: string;
}

export interface UserGroup {
    userGroupId?: string;
    user?: UserDetail[];
    userRole?: UserRole;
    status?: Status;
    userGroupName?: string;
    productType?: string;
    productCategory?: string;
    thicknessMin?: string;
    thicknessMax?: string;
    widthMin?: string;
    widthMax?: string;
    temperMin?: string;
    temperMax?: string;
    userGroupNoOfUser?: string;
    userGroupDate?: string;
    alias?: string;
    createdDate?: string;
}

export interface Roles {
    id?: string;
    role?: string;
    description?: string;
}

export interface UserMini
{
    userDetialId?: string;
    firstName?: string;
    companyName?: string;   
}
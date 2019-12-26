//personal detail
export interface User {
    id?: string;
    firstName?: string;
    lastName?: string;
    mobile?: string;
    email?: string;
    password?: string;
    userRole?: UserRole;
    status?: Status;
    privileges?: string[];
    userDetail?: UserDetail;
    employeeDetail?: EmployeeDetail;
    userGroup?: UserGroup[];
 
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

//comPANY DETAIL
export interface UserDetail {
    userDetailId?: string;
    userProductPreference?: UserProductPreference[];
    securityQuestionId?: SecurityQuestion;
    faqId1?: FrequentlyAskedQuestions;
    keyPerson?: KeyPerson[];
    annualTurnover?: AnnualTurnover[];
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
    mobile1?: string;
    mobile2?: string;
    emailBusiness?: string;
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
    thicknessRange?: string;
    temperRange?: string;
    widthRange?: string;
    lengthRange?: string;
    monthlyRequirement?: string;
   
}

export interface SecurityQuestion {
    securityQuestionId?: string;
    securityQuestion?: string;
    securityAnswer?: string;
   
}

export interface FrequentlyAskedQuestions {
    frequentlyAskedQuestionsId?: String;
    frequentlyAskedQuestion?: string;
    frequentlyAskedAnswer?: string;
   
}

export interface UserGroup {
    userGroupId?: string;
    user?: User[];
    userRole?: UserRole;
    status?: Status;
    userGroupName?: string;
    productType?: string;
    productCategory?: string;
    minThickness?: string;
    maxThickness?: string;
    minWidth?: string;
    maxWidth?: string;
    minTemper?: string;
    maxTemper?: string;
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

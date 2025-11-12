
export interface IContactRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ILoginRequest {
  password: string;
  email: string;
}

export interface IForgotPasswordRequest {
  email: string;
}

export interface ICreateNewPasswordRequest {
  password: string;
}

export interface INewsletterRequest {
  email: string;
}

export interface ISearchRequest {
  q: string;
}

export interface IResetPasswordRequest {
  password: string,
  userId: string,
  authToken: string
};

export interface IChangePasswordRequest {
  oldPassword: string,
  newPassword: string,
};

export interface IUpdateAdminDetailsRequest {
  firstName: string,
  lastName: string,
  email: string,
  image?: any,
};

export interface ICreateNewFAQRequest {
  question: string;
  answer: string;
  category: any;
};

export interface ICreateNewNotificationRequest {
  adminId: string;
  message: string;
  service: string;
  event: string;
};

export interface ICreateNewInvoiceRequest {
  name: string;
  email: string;
  phone: string;
  address: string;
  status: any;
  currency?: string;
  taxRates: number;
  total?: number;
  subTotal?: number;
  notes: string;
  tax?: string;
  discount: string;
  items?: InvoiceItem[];
}

interface InvoiceItem {
  itemName: string;
  unitPrice: string;
  quantity: string;
}

export interface IUpdateFAQRequest extends ICreateNewFAQRequest { };
export interface IUpdateBioLinkRequest extends ICreateNewBioLinkRequest { };
export interface IUpdateLifeStyleRequest extends ICreateNewLifeStyleContentRequest { };

export interface IUpdateInvoiceRequest extends ICreateNewInvoiceRequest { };
export interface IUpdatePortfolioRequest extends ICreateNewPortfolioRequest { };
export interface IUpdateProductsRequest extends ICreateNewProductsRequest { };
export interface IUpdateAdminPackageRequest extends ICreateNewAdminPackageRequest { };
export interface IUpdateAdminClassPackageRequest extends ICreateNewAdminClassRequest { };

export interface ICreateNewBioLinkRequest {
  title: string;
  description: string;
  link: string;
  coverImage?: any;
};

export type IContentWithoutLink = Omit<ICreateNewBioLinkRequest, "link">
export interface ICreateNewLifeStyleContentRequest extends IContentWithoutLink {
  youtubeLink: string;
}

export interface IImportNewslettersRequest {
  email?: any
};

export interface ICreateNewPortfolioRequest {
  title: string;
  image?: any;
};

export interface ICreateNewProductsRequest {
  name: string;
  price: number;
  category: any;
  description: string;
  amazonLink: string;
  images?: any;
};

export interface IBookServiceYourInformation {
  firstName: string,
  lastName: string,
  email: string,
  phoneNumber: string,
  service_date: string,
  service_time: string,
  address?: string,
  preferred_service_location: any,
};

export interface IBookServiceQuestionnaire {
  package: any,
  price?: number,
};


export type IPackageAddon = {
  name: string,
  price: number,
  quantity: number,
  total: number
};


export interface IBookBridalServiceQuestionnaire {
  service_type?: any,
  package: any,
  wedding: any,
  makeup_flower_girls?: any,
  makeup_junior_brides?: any,
  makeup_bridal_parties?: any,
  mother_of_bride_makeup?: any,
  mother_of_groom_makeup?: any,
  groom_makeup?: any,
  trial_session_date?: string,
  trial_session_time?: string,
  price?: number,
};

export interface IBookServiceConfirmation {
  question_allergies?: any,
  question_picture?: any,
  hear_about_us: any,
  description?: string,
  image?: string,
  status: any,
  terms_condition?: any,
};

export interface ICreateNewAdminPackageRequest {
  package: string;
  description: string;
  price: number;
  image?: any;
  consultation?: any;
  additionalServices?: any;
};

export type ICreateNewAdminClassRequest = Omit<ICreateNewAdminPackageRequest, "additionalServices"> & {
  hours: string;
  type: any;
};

export interface ICreateNewPackageRequest {
  price?: number;
  package?: any;
  image?: any;
  description?: string;
  consultation?: any;
  additionalServices?: any;
  questionnaire?: any;
  termsConditions?: any;
  glamSessionAllergies?: any;
  allergies?: any;
};

export type IUseFormData = {
  key: string;
  existingObject: any;
  file: File;
}

export type ISearchInvoiceRequest = {
  q: string;
};

export interface ICreatePaymentRequest {
  intent: string;
  price: number;
  beautyClassId?: string;
  bridalId?: string;
  glamId?: string;
  photoId?: string;
  status: string;
};

export interface IPolicyRequest {
  clientName: string;
  date: string;

};



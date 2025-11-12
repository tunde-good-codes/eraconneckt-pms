interface dataResponse {
  data: string;
};

export interface IFetchAllContactResponse {
  total: number;
  limit: number;
  page: number;
  pages: number;
  data: IFetchSingleContact[];
}

export interface IFetchSingleContact {
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
  updatedAt: string;
  id: string;
}

export interface INewsletterSubscriptionResponse extends dataResponse { }
export interface IContactUsResponse extends dataResponse { }
export interface IForgotPasswordResponse extends dataResponse { }
export interface IResetPasswordResponse extends dataResponse { }
export interface IChangePasswordResponse extends dataResponse { }
export interface IUpdateAdminDetailsResponse extends dataResponse { }

export type loginData = {
  user: userData;
  token: string;
}

type loginResponseData = {
  data: loginData
}

export interface ILoginResponse {
  data: loginResponseData
}

export interface userData {
  firstName: string;
  lastName: string;
  email: string;
  adminId: string;
  image: string;
}

export interface IRootResponse<T> {
  total: number;
  limit: number;
  page: number;
  pages: number;
  data: T[];
}

export interface ISinglePackageDetail extends IRootResponse<ISinglePackage> {
}

export type ISinglePackage = {
  package: string;
  price: number;
  description: string;
  image: string;
  additionalServices: string;
  consultation: string;
  makeup_flower_girls?: IMakeUpItem[];
  makeup_junior_brides?: IMakeUpItem[];
  makeup_bridal_parties?: IMakeUpItem[];
  mother_of_bride_makeup?: IMakeUpItem[];
  mother_of_groom_makeup?: IMakeUpItem[];
  groom_makeup?: IMakeUpItem[];
  subTotal: number;
  totalAmount: number;
  createdAt: string;
  updatedAt: string;
  id: string;
  cloudinary_id?: string;
};

export type ISingleClassPackage = {
  package: string;
  price: number;
  description: string;
  image: string;
  consultation: string;
  createdAt: string;
  updatedAt: string;
  id: string;
  hours: string;
  type: string;
  cloudinary_id?: string;
};
export interface IMakeUpItem {
  quantity: number;
  price: number;
  total: number;
  _id: string;
}
export interface IFetchAllBioLinkResponse {
  total: number;
  limit: number;
  page: number;
  pages: number;
  data: IBioLink[];
}

export interface IBioLink {
  title: string;
  description: string;
  coverImage: string;
  link: string;
  cloudinary_id: string;
  createdAt: string;
  updatedAt: string;
  id: string;
}

export interface IFAQsResponse {
  total: number;
  limit: number;
  page: number;
  pages: number;
  data: IFAQ[];
}

export interface IFAQ {
  question: string;
  answer: string;
  category: string;
  createdAt: string;
  updatedAt: string;
  id: string;
}


//! TODO: Create a single IRootResponse type for all responses
export interface INotificationsResponse {
  total: number;
  limit: number;
  page: number;
  pages: number;
  data: INotifications[];
}


export interface INotifications {
  adminId: string;
  message: string;
  event: string;
  service: string;
  status: string;
  readAt?: number;
  createdAt: string;
  id: string;
};

export interface ICreateBioLinkResponse {
  data: IBioLinkData;
}

interface IBioLinkData {
  bio: ICreateBio;
}

interface ICreateBio {
  title: string;
  description: string;
  coverImage: string;
  link: string;
  bioId: string;
};

export interface ISingleNewsletter {
  id: number;
  email: string;
  createdAt: string;
  updatedAt: string;
};

export interface ILifestyleContentResponse {
  total: number;
  limit: number;
  page: number;
  pages: number;
  data: ILifestyleContent[];
}

export interface ILifestyleContent {
  title: string;
  description: string;
  coverImage: string;
  youtubeLink: string;
  cloudinary_id: string;
  createdAt: string;
  updatedAt: string;
  id: string;
};

export interface IPortfolioResponse {
  total: number;
  limit: number;
  page: number;
  pages: number;
  data: ISinglePortfolio[];
}

export interface ISinglePortfolio {
  title: string;
  image: string;
  cloudinary_id: string;
  createdAt: string;
  updatedAt: string;
  id: string;
};

export interface IInvoiceResponse {
  total: number;
  limit: number;
  page: number;
  pages: number;
  data: ISingleInvoice[];
}

export interface ISingleInvoice {
  date: string;
  currency: string;
  invoiceNumber: number;
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  items: IInvoiceItem[];
  status: string;
  taxRates: number;
  tax: number;
  notes: string;
  createdAt: string;
  updatedAt: string;
  id: string;
  discount?: number;
  subTotal?: number;
  total?: number;
}

interface IInvoiceItem {
  itemName: string;
  unitPrice: number;
  quantity: number;
  _id: string;
  discount?: string;
}

export interface IProductsResponse {
  total: number;
  limit: number;
  page: number;
  pages: number;
  data: ISingleProduct[];
}

export interface ISingleProduct {
  _id: string;
  name: string;
  price: number;
  description: string;
  images: string[];
  category: string;
  featured: boolean;
  freeShipping: boolean;
  amazonLink: string;
  cloudinary_ids: string[];
  user: string;
  __v: number;
};

export interface ISearchResponse {
  docs: any[];
  total: number;
  limit: number;
  page: number;
  pages: number;
};

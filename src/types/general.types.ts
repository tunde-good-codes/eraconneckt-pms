import {
  CSSProperties,
  ChangeEvent,
  HTMLInputTypeAttribute,
  ReactNode,
  InputHTMLAttributes,
  Key
} from "react";
import { Path } from "react-router-dom";














export type useLocationPathNameResult = {
  path: string;
  searchParam: string | null;
};

/**
 ** This describes the type of Button
 ** There are currently three types of buttons:
 ** PRIMARY, SECONDARY, and TERTIARY
 */

export const enum ButtonType {
  PRIMARY = "PRIMARY",
  SECONDARY = "SECONDARY",
  TERTIARY = "TERTIARY",
}

export type IButton = {
  buttonType: ButtonType; // can either be PRIMARY or SECONDARY or TERTIARY
  text: string; // text of the button
  hasLine: boolean; // line for the button
  style: {}; // additional stylings for button
  click: (() => void) | undefined; // function to call
  isLoading: boolean; // if true, disable button to prevent further clicking
  cName?: string; // additional className for the button
  isAnimatable: boolean; // describe if button should animated.
};

export type IButtonLine = {
  lineBackgroundColor: string;
};

export type ICarouselItems = [
  {
    id: number;
    imgSrc: string;
    caption: string;
    description: string;
  }
];

export interface IFormInput extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  name: string;
  type: HTMLInputTypeAttribute;
  cName?: string;
  id: string;
  hasLabel: boolean;
  label?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  style?: CSSProperties;
  value?: any;
  rest: any;
  errorText: string | undefined;
  icon?: ReactNode;
  control: any
}
export type IFeatureCard = {
  id:number;
  icon: string;
  title: string;
  description: string;
  featureItems:string[];
  demoUrl:string;
}[];

export type IPricingCard = {
  id:number;
  package: string;
  headline: string;
  features:string[];
  demoUrl:string;
}[];
export interface IIncrementDecrementFormInput extends IFormInput {
  maxValue?: number;
  minValue?: number;
};
export type ILocation = {
  pathname: any;
  state: any;
  key: Key;
};
export type IUseLocationPathName = {
  location: ILocation;
  limit: number;
  isFirstLetterUppercased: boolean;
  searchQuery: string;
  pathname?: keyof typeof Path;
};
export type IChildren = {
  children: ReactNode;
};


export interface IModal extends IChildren {
  openModal: () => void;
  closeModal: () => void;
  open: boolean;
}
export type ISubNavComponent = {
  isNavLinkHovered: boolean;
  setIsNavLinkHovered: React.Dispatch<React.SetStateAction<boolean>>;
  navLinkPath: string;
  hasSubNavLinks: boolean;
};

export type INavLink = {
  id: number;
  path: string;
  name: string;
}[];
export type INavLinkPath = Omit<
  ISubNavComponent,
  "isNavLinkHovered" | "setIsNavLinkHovered" | "SetStateAction" | "hasSubNavLinks"
>;
export type IFAQ = {
  question: string;
  answer: string;
  id: number;
}[];

export type IContactRequest = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type IBaseText = {
  click?: () => void; // function to call
  textColor: string;
  text: any;
  style?: {};
  cName?: string;
  children?: ReactNode;
  isAnimatable: boolean; // describes if title should be animated
};

export interface ITitle extends IBaseText { }
export interface ISubTitle extends IBaseText { }
export interface IP extends IBaseText { }

export interface IFormInput extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  name: string;
  type: HTMLInputTypeAttribute;
  cName?: string;
  id: string;
  hasLabel: boolean;
  label?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  style?: CSSProperties;
  value?: any;
  rest: any;
  errorText: string | undefined;
  icon?: ReactNode;
  control: any
}


export type ISelectData = {
  label: string;
  value: string | number;
}[]

export interface IIncrementDecrementFormInput extends IFormInput {
  maxValue?: number;
  minValue?: number;
};

type ISelectValue = ISelectData | null;

export interface IFormSelect {
  label?: string;
  options: ISelectData;
  value?: ISelectValue;
  placeholder: string;
  isLoading?: boolean;
  multiSelect: boolean;
  defaultValue?: ISelectValue;
  name: string;
  cName?: string;
  id: string;
  hasLabel: boolean;
  control: any
  errorText: any;
  rest: any;
}

export interface IDragAndDrop {
  handleDragDrop: (file: any) => void;
  fileName: string;
  isLoading?: boolean;
  supportiveText: string;
  name: string;
  multiple: boolean;
  control: any;
  value?: any;
  rest: any;
  errorText: any;
}

export type IFormTextarea = {
  placeholder: string;
  name: string;
  cName?: string;
  id: string;
  hasLabel: boolean;
  label?: string;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  style?: CSSProperties;
  value?: string;
  rest: any;
  errorText: string | undefined;
  control: any
};


export type ISectionHeader = {
  titleText: string;
  subTitleText: string;
  descText: string;
};

export type IHoverAbleCard = {
  bgImage: string;
  bgImageHeight: string;
  bgImageWidth: string;
  title?: string;
  btnText: string;
  btnFunction: () => void;
  backgroundImageHasShadow: boolean;
};



export type IRichTextAreaComponent = {
  control: any;
  errorText: string | undefined;
  rest: any;
  initialValue: string
  name: string
};


export interface IRadioData extends ISelectData { }

export interface IRadioComponent extends InputHTMLAttributes<HTMLInputElement> {
  options: IRadioData;
  name: string;
  handleChange: (value: any) => void;
  selectedValue: string;
  errorText: any;
  rest: any;
};


export type IImageFrameWithHoverEffect = {
  backgroundImage: string;
  height: string;
  width: string;
};
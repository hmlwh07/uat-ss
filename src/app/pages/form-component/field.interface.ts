import { FormGroup } from '@angular/forms';
import { PageUIType } from '../products/models/product.dto';

export interface Field {
  config: ConfigInput,
  group: FormGroup,
  editStage?: boolean
  reGetOption?: Function
  isNrc?: boolean
  doFunction?: Function
}

export interface ConfigInput {
  input?: string,
  isLabel?: boolean,
  name?: string,
  coreName?: string,
  label?: string,
  labelMM?: string,
  endName?: string,
  endCoreName?: string,
  endLabel?: string,
  endLabelMM?: string,
  parentDateLimit?: string,
  type?: string,
  multi?: boolean
  options?: OptionValue[],
  size?: number,
  mdSize?: number,
  lgSize?: number,
  inlineStyle?: boolean,
  labelSize?: string,
  inputSize?: string,
  placeholder?: string,
  placeholderMM?: string,
  master?: any,
  show?: boolean,
  readonly?: boolean,
  disabled?: boolean
  value?: any,
  masterData?: string
  valueField?: string
  showField?: string
  autoFields?: OptionValue[]
  break?: string,
  dependency?: InputDependency
  validation?: InputValidation[]
  isFun?: boolean
  inpFunction?: InputFunction
  isHideView?: boolean
  policyterm?: boolean
  tableTitle?: string
  party?: boolean
}

export interface InputDependency {
  parentName: string
  value: any
  isArray: boolean
  isRelated: boolean
  relatedField?: string
  show: boolean
}

export interface InputValidation {
  type: ValidationType,
  value?: any,
  dateType?: DateType,
  to?: string,
  from?: string,
  message?: string
  messageMM?: string
  isAge?: boolean
}

export interface InputFunction {
  funName?: string
  type: FUNCTION_TYPE
}
export enum FUNCTION_TYPE {
  TRIGGER = 'trigger',
  GETDATA = 'getdata'
}

export class FormatLoan {
  code: string
  value: string
}

export interface BtnConfig {
  label: string,
  labelMM?: string,
  type: ActionType,
  size: number,
  position: string,
  fill: boolean,
  color: BtnColor
}

export interface OptionValue {
  text: string,
  textMM?: string,
  value: any,
  field?: string
}

export enum ValidationType {
  REQUIRED = "required",
  MIN = "min",
  MAX = "max",
  DATE = 'date',
}

export enum DateType {
  WEEK = 'week',
  MONTH = 'month',
  DAY = 'day',
  YEAR = 'year'
}

export enum InputType {
  TEXT = "text",
  EMAIL = "email",
  PHONE = "tel",
  NUMBER = "number",
  CRRENCY = "currency",
  TEXTAREA = "textarea",
  NRC = "nrc"
}

export enum ActionType {
  SUBMIT = 'submit',
  NEXT = 'next',
  PREVIOUS = 'previous',
  RESET = 'reset'
}
export enum BtnPostion {
  NONE = '',
  CENTER = 'mx-auto',
  LEFT = 'ml-auto',
  RIGHT = 'mr-auto'
}

export enum BtnColor {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  SUCCESS = 'success',
  WARNING = 'warning',
  DANGER = 'danger',
  INFO = 'info',
  DARK = 'dark',
  LIGHT = 'light',
}
export enum InputBoxType {
  INPUT = "input",
  CHECKBOX = "checkbox",
  DIALOG = "dialog",
  FILE = "file",
  RADIO = "radio",
  SELECT = "select",
  DATE = "date",
}

export interface FromGroupData {
  id: string,
  type?: string
  structure?: PageUIType
  pageTitle?: string,
  pageIcon?: string,
  pageType?: string,
  tableName?: string,
  function?: string
  controls?: ConfigInput[],
  buttons?: BtnConfig[]
  parent?: string
  party?: boolean
  unitCode?: string
}
export interface ConfigPage {
  totalPage: number,
  pageName: string,
  fromGroup: FromGroupData[]
}
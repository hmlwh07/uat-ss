import { ConfigInput, FromGroupData } from "../../form-component/field.interface";
import { PageUIType } from "./product.dto";

export interface PrintConfig {
  default?: FromGroupData[]
  prinitUI?: FromGroupData[]
  printFormat?: PrintFormat[]
}

export interface PrintFormat {
  id?: string
  pageType?: PrintFormatType
  title?: string
  tableName?: string
  type?: PageUIType
  tables?: PrintTable[]
  tableCol?: PrintCol[]
  component?: string
}
export interface PrintTable {
  title?: string
  row?: PrintRow[]
}
export interface PrintRow {
  rowID?: string
  height?: string
  background?: string
  color?: string
  column?: PrintCol[]
  break?: boolean
}
export interface PrintCol {
  size?: boolean
  data?: ConfigInput
  title?: string
  background?: string
  color?: string
  rowspan?: number
  colspan?: number
  align?: string
  static?: boolean
  key?: string
  otherOption?: any[]
}
export enum PrintFormatType {
  TABLE = "table",
  FORM = "form"
}
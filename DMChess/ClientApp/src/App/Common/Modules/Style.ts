import { Win } from '../../Common/Modules/Win';
import { GM } from '../../Main/Shared/Modules/Global';
export interface IStyle {
  position?: string, filter?: string, opacity?: number, 
  left?: string, top?: string, right?: string, bottom?: string, width?: string, height?: string,
  "max-width"?: string, "max-height"?: string, "min-width"?: string, "min-height"?: string, 
  margin?: string, "margin-left"?: string, "margin-top"?: string, "margin-right"?: string, "margin-bottom"?: string,
  padding?: string, "padding-left"?: string, "padding-top"?: string, "padding-right"?: string, "padding-bottom"?: string,
  border?: string, "border-style"?: string, "border-color"?: string,
  "border-top"?: string, "border-top-style"?: string, "border-top-color"?: string, 
  "border-right"?: string, "border-right-style"?: string, "border-right-color"?: string, 
  "border-bottom"?: string, "border-bottom-style"?: string, "border-bottom-color"?: string, 
  "border-left"?: string, "border-left-style"?: string, "border-left-color"?: string, 
  "background-size"?: string, "background-color"?: string, "background-repeat"?: string, 
  font?: string, "font-family"?: string, "font-size"?: string, "font-style"?: string, "font-variant"?: string, "font-weight"?: string,
  color?: string, "display"?: string
}

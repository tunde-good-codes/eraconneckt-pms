import "./ButtonLine.css";
import { IButtonLine } from "../../types/general.types";





export default function ButtonLine({
  lineBackgroundColor }: IButtonLine) {

  return (
    <div
      style={{
        backgroundColor: lineBackgroundColor
      }}
      className="button-line"
    >
    </div>
  )
}

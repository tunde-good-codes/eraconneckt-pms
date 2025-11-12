import styled from "styled-components";
import "./SubTitle.css";
import { ISubTitle } from "../../types/general.types";

const SubTitleComponent = styled.h2`

`;

function SubTitle({
  textColor,
  text,
  style,
  cName,
  children,
  isAnimatable,
  click,
}: ISubTitle) {


  return (
    <SubTitleComponent
      data-aos={isAnimatable ? `fade-up` : ``}
      data-aos-once="true"
      className={`subtitle ${cName}`}
      style={{
        color: textColor,
        cursor: click ? "pointer" : "default",
        ...style
      }}
      onClick={click}
    >
      {children ? children : null}
      {text ? text : null}
    </SubTitleComponent>
  );
}

export default SubTitle;
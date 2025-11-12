import styled from "styled-components";
import "./Title.css";
import { ITitle } from "../../types/general.types";


const TitleComponent = styled.h1`

`;


function Title({
  textColor,
  text,
  style,
  cName,
  children,
  isAnimatable,
  click,
}: ITitle) {

  return (
    <TitleComponent
      data-aos={isAnimatable ? `fade-up` : ``}
      data-aos-once="true"
      className={`title ${cName}`}
      style={{
        color: textColor,
        cursor: click ? "pointer" : "default",
        ...style
      }}
      onClick={click}
    >
      {children ? children : null}
      {text ? text : null}
    </TitleComponent>
  );
}

export default Title;
import styled from "styled-components";
import "./P.css";
import { IP } from "../../types/general.types";
import DOMPurify from "dompurify";

const PComponent = styled.p`

`;

function P({
  textColor,
  text,
  style,
  cName,
  children,
  isAnimatable,
  click,
}: IP) {


  return (
    <>
      {
        children ?
          (<PComponent
            data-aos={isAnimatable ? `fade-up` : ``}
            data-aos-once="true"
            className={`p ${cName}`}
            style={{
              color: textColor,
              cursor: click ? "pointer" : "default",
              ...style
            }}
            onClick={click}
          >
            {children}
          </PComponent>)
          :
          (<PComponent
            data-aos={isAnimatable ? `fade-up` : ``}
            data-aos-once="true"
            className={`p ${cName}`}
            style={{
              color: textColor,
              cursor: click ? "pointer" : "default",
              ...style
            }}
            onClick={click}
            dangerouslySetInnerHTML={{ __html: (DOMPurify.sanitize(text ? text : "")) }}
          >
          </PComponent>)
      }
    </>
  );
}

export default P;
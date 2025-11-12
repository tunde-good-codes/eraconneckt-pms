import styled from "styled-components"
import { useState } from "react";
import { IImageFrameWithHoverEffect } from "../../types/general.types";




export default function ImageFrameWithHoverEffect({ backgroundImage, width, height }: IImageFrameWithHoverEffect) {



  const [isMouseEnter, setIsMouseEnter] = useState(false);


  return (
    <ImageFrameWrapper
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height,
        width,
        maxHeight: `${height}`
      }}
      onMouseEnter={() => setIsMouseEnter(true)}
      onMouseLeave={() => setIsMouseEnter(false)}
    >
      {isMouseEnter && <MouseEnterFrame
        data-aos="fade-in"
        data-aos-once="true"
      />}
    </ImageFrameWrapper>
  )
}



const ImageFrameWrapper = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  padding: 8px;
  margin-top: 2rem;
  background-color: var(--tertiary-color);
}`

const MouseEnterFrame = styled.div`
  background: transparent;
  border: 1px solid #fff;
  margin: auto auto;
  min-height: 100%;
  min-width: 100%;
}`
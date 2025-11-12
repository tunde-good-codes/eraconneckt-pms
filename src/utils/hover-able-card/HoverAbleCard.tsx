import Title from "../title/Title"
import ButtonComponent from "../button/ButtonComponent"
import { Colors } from "../colors/colors";
import { useState } from "react";
import "./HoverAbleCard.css";
import { ButtonType, IHoverAbleCard } from "../../types/general.types";


export default function HoverAbleCard({
  bgImage,
  bgImageHeight,
  bgImageWidth,
  title,
  btnText,
  btnFunction,
  backgroundImageHasShadow
}: IHoverAbleCard) {


  const { whiteColor } = Colors();
  const [isMouseEnter, setIsMouseEnter] = useState(false);

  return (
    <div
      className="hover-able-card--wrapper"
      onMouseEnter={() => setIsMouseEnter(true)}
      onMouseLeave={() => setIsMouseEnter(false)}
      style={{
        height: bgImageHeight,
        width: bgImageWidth,
        maxWidth: bgImageWidth,
        maxHeight: bgImageHeight,
      }}
    >
      <div
        className="hover-able-card"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
        }}
      ></div>
      <div
        className="hover-able-card-content--wrapper"
        style={{
          background: `${backgroundImageHasShadow ? "" : "linear-gradient(180deg, rgba(61, 0, 37, 0.00) 0%, #3D0025 100%), transparent 50%"}`,
        }}
      >
        <Title
          text={title ? title : ""}
          textColor={whiteColor}
          style={{
            display: "flex",
            margin: 0,
            padding: 0,
            flexDirection: "column",
            alignItems: "center",
            gap: "0.625rem",
            marginBottom: "1rem",
            fontSize: "1.625rem",
          }}
          isAnimatable={true}
        />
        {
          isMouseEnter &&
          <ButtonComponent
            isAnimatable={true}
            text={btnText}
            hasLine={true}
            buttonType={ButtonType.SECONDARY}
            cName=""
            style={{
              minWidth: "100%",
            }}
            click={btnFunction}
            isLoading={false}
          />}
      </div>
    </div>
  )
}

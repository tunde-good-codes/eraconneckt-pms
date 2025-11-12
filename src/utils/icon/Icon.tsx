import React from "react";
import styled from "styled-components";
import { useIcons } from "../../hooks/useIcons";


type Props = {
  Icon: React.ComponentType;
  link: string;


};

const Icon = ({ Icon, link }: Props) => {
  return (
    <>
      <a
        href={link}
        hrefLang="en-us"
        rel="noreferrer noopener nofollow"
        target="_blank">
        <div
          className="icon-div"
        >
          <Icon />
        </div>
      </a>
    </>
  );
};

export default Icon;


export const ModalIcon: React.FC = () => {

  const {
    modalCloseIcon
  } = useIcons();

  return (
    <>
      <IconWrapper
        title={"Close"}
      >
        <SVGIcon
          src={modalCloseIcon}
          alt={"close"}
        />
      </IconWrapper>
    </>
  )
};


const IconWrapper = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  flex-shrink: 0;
`;

const SVGIcon = styled.img`
  width: 100%;
  height: 100%;
`;

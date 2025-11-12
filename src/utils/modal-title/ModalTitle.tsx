import React from 'react'
import Title from '../title/Title'
import styled from 'styled-components';
import { Colors } from '../colors/colors';


type IProps = {
  modalTitle: string
};

const {
  blackColor
} = Colors();

export default function ModalTitle({
  modalTitle
}: IProps) {
  return (
    <ModalTitleWrapper>
      <Title
        textColor={blackColor}
        text={modalTitle}
        isAnimatable={false}
        style={{
          fontSize: "1.875rem"
        }}
      />

      <HorizontalLine />
    </ModalTitleWrapper>
  )
}


const ModalTitleWrapper = styled.div`
  text-align: center;
`;

const HorizontalLine = styled.div`
  border: 0.5px solid var(--border-color);
  width: 100%;
  margin: 2rem auto;
`;
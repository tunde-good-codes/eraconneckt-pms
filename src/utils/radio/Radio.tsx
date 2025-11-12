import React, { Fragment } from 'react'
import "./Radio.css";
import { RadioGroup, Radio } from "react-radio-group";
import { IRadioComponent } from "../../types/general.types";
import styled from 'styled-components';
import { Colors } from '../colors/colors';
import P from '../p/P';



export default function RadioComponent({
  selectedValue,
  handleChange,
  name,
  options,
  errorText,
  value,
  ...rest
}: IRadioComponent) {

  const {
    dangerColor
  } = Colors();


  return (
    <>
      <RadioGroup
        name={name}
        selectedValue={selectedValue}
        value={value}
        onChange={handleChange}
      >
        <RadioGroupWrapper>
          {options?.map((option) => (
            <Fragment
              key={option.label}
            >
              <Label>
                <Radio
                  value={option.value}
                  {...rest}
                  className="custom-radio"
                  id="accent"
                  checked={selectedValue === option.value}
                />
                {option.label}
              </Label>
            </Fragment>
          ))}
        </RadioGroupWrapper>
      </RadioGroup>

      {errorText && errorText?.trim()?.length > 0 && <P
        textColor={dangerColor}
        text={errorText || ""}
        isAnimatable={false}
        style={{
          margin: 0
        }}
      />
      }
    </>
  )
}

const RadioGroupWrapper = styled.div`
	display: flex;
	flex-direction: row;
	gap: 2rem;
  cursor: pointer;
`;

const Label = styled.label`
	display: flex;
	align-items: center;
	flex-direction: row;
	gap: 8px;
`;

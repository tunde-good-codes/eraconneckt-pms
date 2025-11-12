import React from "react";
import styled from "styled-components";
import { IIncrementDecrementFormInput } from "../../types/general.types";
import { Colors } from "../colors/colors";
import "./Input.css"
import { Controller } from "react-hook-form"















const IncrementDecrementInputComponent = ({
  placeholder,
  name,
  cName,
  id,
  onChange,
  style,
  value,
  hasLabel,
  label,
  errorText,
  type,
  icon,
  control,
  maxValue = 100,
  minValue = 0,
  defaultValue,
  ...rest
}: IIncrementDecrementFormInput) => {



  const { dangerColor } = Colors();





  return (


    <UnitWrapper
      style={{
        border: `1px solid`,
        borderColor: errorText ? dangerColor : "transparent",
      }}
    >
      <InputComponentWrapper>
        <div
          className="d-flex flex-column"
        >
          {hasLabel && (<label className="form-label">{label}</label>)}

          <Controller
            rules={{ required: true }}
            name={name}
            control={control}
            defaultValue={defaultValue}
            render={({ field: { onChange, onBlur, ref } }) => (
              <input
                name={name}
                placeholder={placeholder}
                type={type}
                className={`input gap-5`}
                id={id}
                onChange={onChange}
                style={{
                  ...style,
                  width: "100%",
                  borderColor: errorText && dangerColor,

                  // We need to set the background color to transparent because of the disabled state
                  backgroundColor: "transparent",
                }}
                disabled={false}
                defaultValue={defaultValue}
                value={value}
                {...rest}
                onBlur={onBlur}
                ref={ref}
              />
            )}
          />


          {icon && icon}

        </div>

      </InputComponentWrapper>

    </UnitWrapper>
  );
};

export default IncrementDecrementInputComponent;


const InputComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;


const UnitWrapper = styled.div`
	display: flex;
	height: 100%;
	align-items: center;
	border-radius: 4px;
	border: 1px solid var(--border-color) !important;
	justify-content: space-between;
	padding: 0px;
`;


import styled from "styled-components";
import { IFormInput } from "../../types/general.types";
import { Colors } from "../colors/colors";
import P from "../p/P";
import "./Input.css"
import { Controller } from "react-hook-form"



const InputComponent = ({
  placeholder,
  name,
  type,
  cName,
  id,
  onChange,
  style,
  value,
  hasLabel,
  label,
  errorText,
  icon,
  control,
  ...rest
}: IFormInput) => {

  const { dangerColor } = Colors();

  return (
    <InputComponentWrapper>
      <div
        className="d-flex flex-column w-100"
      >
        {hasLabel && (<label className="form-label">{label}</label>)}

        <Controller
          rules={{ required: true }}
          name={name}
          control={control}
          defaultValue={value}
          render={({ field: { onChange, onBlur, ref } }) => (
            <input
              name={name}
              placeholder={placeholder}
              type={type}
              className={`input ${cName} gap-5`}
              id={id}
              onChange={onChange}
              style={{
                ...style,
                borderColor: errorText && dangerColor
              }}
              defaultValue={value}
              {...rest}
              onBlur={onBlur}
              ref={ref}
            />
          )}
        />


        {icon && icon}

      </div>

      {errorText && <P
        textColor={dangerColor}
        text={errorText || ""}
        isAnimatable={false}
        style={{
          margin: 0
        }}
      />
      }
    </InputComponentWrapper>
  );
};

export default InputComponent;


const InputComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
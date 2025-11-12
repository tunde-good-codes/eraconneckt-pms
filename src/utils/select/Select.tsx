import { Controller } from "react-hook-form"
import Select from 'react-select';
import { IFormSelect } from "../../types/general.types";
import makeAnimated from "react-select/animated";
import { Colors } from "../colors/colors";
import P from "../p/P";
import "./Select.css"




const SelectComponent: React.FC<IFormSelect> = ({
  placeholder,
  name,
  cName,
  id,
  hasLabel,
  label,
  errorText,
  options,
  value,
  control,
  defaultValue,
  multiSelect
}) => {

  const {
    primaryColorLightest,
    dangerColor,
    primaryColor,
  } = Colors();
  const animatedComponents = makeAnimated();





  return (
    <>
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
            <Select
              closeMenuOnSelect={!multiSelect}
              components={animatedComponents}
              isMulti={multiSelect}
              options={options}
              value={value}
              onChange={(val) => onChange(val)}
              onBlur={onBlur}
              ref={ref}
              classNames={{
                control: (state) =>
                  state.isFocused ? 'border-grey' : 'border-grey-300',
              }}
              className={`input ${cName} gap-5`}
              id={id}
              placeholder={placeholder}
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  borderColor: errorText ? dangerColor : state.isFocused ? '#fff' : '#fff',
                  backgroundColor: 'transparent',
                  minWidth: "100%",
                }),
                placeholder: (baseStyles) => {
                  return {
                    ...baseStyles,
                  };
                },
                // Style for the dropdown indicator (arrow)
                indicatorSeparator: (provided) => ({
                  ...provided,
                  height: "90%",
                  backgroundColor: "transparent", // Change this to the desired font color
                }),
                singleValue: (provided) => ({
                  ...provided,
                }),
                option: (base) => ({
                  ...base,
                }),
              }}
              theme={(theme) => ({
                ...theme,
                colors: {
                  ...theme.colors,
                  primary25: primaryColorLightest,
                  primary: primaryColor,
                  danger: dangerColor
                },
              })}
            />
          )}
        />
      </div>

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
  );
};

export default SelectComponent;

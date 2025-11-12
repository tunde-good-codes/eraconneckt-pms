import { IFormTextarea } from "../../types/general.types";
import { Colors } from "../colors/colors";
import P from "../p/P";
import "./Textarea.css"
import { Controller } from "react-hook-form"


const TextareaComponent = ({
  placeholder,
  name,
  cName,
  id,
  onChange,
  style,
  value,
  hasLabel,
  label,
  control,
  errorText,
  ...rest
}: IFormTextarea) => {

  const { dangerColor } = Colors();

  return (
    <div
      className="my-3"
    >
      <div className="d-flex flex-column">
        {hasLabel && (<label className="form-label">{label}</label>)}

        <Controller
          rules={{ required: true }}
          name={name}
          control={control}
          defaultValue={value}
          render={({ field: { onChange, onBlur, ref } }) => (
            <textarea
              name={name}
              placeholder={placeholder}
              className={`textarea ${cName}`}
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
            ></textarea>
          )}
        />
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
    </div>
  );
};

export default TextareaComponent;

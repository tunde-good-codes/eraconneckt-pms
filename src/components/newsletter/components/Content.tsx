import styled from "styled-components";
import { Colors } from "../../../utils/colors/colors";
import { useCallback} from "react";
import { useForm } from "react-hook-form";
import { INewsletterRequest } from "../../../types/request.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { Schema } from "../../../validators/schema";
import SubTitle from "../../../utils/subtitle/SubTitle";
import Title from "../../../utils/title/Title";
import InputComponent from "../../../utils/input/Input";
import ButtonComponent from "../../../utils/button/ButtonComponent";
import { ButtonType } from "../../../types/general.types";



const Content = () => {
  const { secondaryColor, whiteColor } = Colors();
  const {
    register,
    
    handleSubmit,
    formState: { errors},
    control
  } = useForm<INewsletterRequest>({
    resolver: yupResolver(Schema().NewsletterSchema),
    mode: "onBlur",
  });

  const onSubmit = useCallback((data: any) => {
   console.log(data);
  }, []);
  

  return (
    <div className="newsletter-content" 
    data-aos="fade-right"
    data-aos-once="true">
      <SubTitle
        isAnimatable={true}
        text={"NEWSLETTER"}
        textColor={secondaryColor}
      />
      <Title
        isAnimatable={true}
        text={"Stay in the Know with Our Newsletter"}
        textColor={whiteColor}
        style={{
          maxWidth: "500px",
          textAlign: "center",
        }}
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputStyles>
          <InputComponent
            placeholder={"Enter your email"}
            type={"text"}
            cName={""}
            id={""}
            style={{
              border: "0",
              outline: "none",
            }}
            hasLabel={false}
            name="email"
            rest={{ ...register("email") }}
            errorText={errors.email?.message}
            control={control}
          />
          <BtnWrapper>
            <ButtonComponent
              isAnimatable={true}
              text={ "SUBSCRIBE"}
              hasLine={true}
              buttonType={ButtonType.PRIMARY}
              cName=""
              style={{
                width: "100%"
              }}
              click={handleSubmit(onSubmit)}
              isLoading={false}
            />
          </BtnWrapper>
        </InputStyles>
      </form>
    </div>
  );
};

export default Content;

const InputStyles = styled.div`
	display: flex;
	flex-direction: column;
	padding: 8px;
	align-items: center;
	gap: 12px;
	border-radius: 4px;
	background: var(--white-color);
	margin-top: 40px;
	@media (min-width: 500px) {
		flex-direction: row;
	}
`;

const BtnWrapper = styled.div`
	width: 100%;
`;

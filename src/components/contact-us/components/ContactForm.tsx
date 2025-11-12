import React, { useCallback, useState } from "react";
import ButtonComponent from "../../../utils/button/ButtonComponent";
import InputComponent from "../../../utils/input/Input";
import TextareaComponent from "../../../utils/textarea/Textarea";
import { ButtonType, IContactRequest } from "../../../types/general.types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Schema } from "../../../validators/schema";

const ContactForm = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitSuccessful },
		control,
	} = useForm<IContactRequest>({
		resolver: yupResolver(Schema().ContactUsSchema),
		mode: "onBlur",
	});

	const onSubmit = useCallback(() => {
		setIsLoading(true);
		// Handle the data
	}, []);

	return (
		<form onSubmit={handleSubmit(onSubmit)} data-aos="fade-right" data-aos-once="true">
			<div className="form-content">
				<InputComponent
					placeholder={"Enter your name"}
					label={"Name"}
					name={"name"}
					id={"name"}
					type={"text"}
					cName={"form-input my-3"}
					hasLabel={true}
					rest={{ ...register("name") }}
					errorText={errors.name?.message}
					control={control}
				/>

				<InputComponent
					placeholder={"Enter your email"}
					label={"Email"}
					name={"email"}
					id={"email"}
					type={"text"}
					cName={"form-input my-3"}
					hasLabel={true}
					rest={{ ...register("email") }}
					errorText={errors.email?.message}
					control={control}
				/>

				<InputComponent
					placeholder={"Enter subject"}
					label={"Subject"}
					name={"subject"}
					id={"subject"}
					type={"text"}
					cName={"form-input my-3"}
					hasLabel={true}
					rest={{ ...register("subject") }}
					errorText={errors.subject?.message}
					control={control}
				/>

				<TextareaComponent
					placeholder={"Enter message"}
					label={"Message"}
					name={"message"}
					id={"message"}
					cName={"form-input my-3"}
					style={{}}
					hasLabel={true}
					rest={{ ...register("message") }}
					errorText={errors.message?.message}
					control={control}
				/>

				<ButtonComponent
					isAnimatable={true}
					text={`Send A Message`}
					hasLine={true}
					buttonType={ButtonType.PRIMARY}
					cName="my-2"
					click={() => {}}
					style={{}}
					isLoading={false}
				/>
			</div>
		</form>
	);
};

export default ContactForm;

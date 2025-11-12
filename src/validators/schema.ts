import * as yup from "yup";




export const Schema = () => {

  const NewsletterSchema = yup.object().shape({
    email: yup.string().trim("Cannot be empty space").email('Must be a valid email').required("Email is required.").email("Must be a valid email address"),
  });

  const ContactUsSchema = yup.object().shape({
    email: yup.string().trim("Cannot be empty space").email('Must be a valid email').required("Email is required.").email("Must be a valid email address"),
    name: yup.string().trim("Cannot be empty space").required("Name is required."),
    subject: yup.string().trim("Cannot be empty space").required("Subject is required.").max(70, "Subject is too long."),
    message: yup.string().trim("Cannot be empty space").min(10, "Message is too short.").required("Message is required."),
  });

  const LoginSchema = yup.object().shape({
    email: yup.string().trim("Cannot be empty space").email('Must be a valid email').required("Email is required.").email("Must be a valid email address"),
    password: yup.string().trim("Cannot be empty space").required("Password is required."),
  });

  const ForgotPasswordSchema = yup.object().shape({
    email: yup.string().trim("Cannot be empty space").email('Must be a valid email').required("Email is required.").email("Must be a valid email address"),
  });

  const CreateNewPasswordSchema = yup.object().shape({
    password: yup.string().trim("Cannot be empty space").required("Password is required."),
  });

  const ChangePasswordSchema = yup.object().shape({
    oldPassword: yup.string().trim("Cannot be empty space").required("Current password is required."),
    newPassword: yup.string().trim("Cannot be empty space").required("New password is required."),
  });

  const SearchSchema = yup.object().shape({
    q: yup.string().trim("Cannot be empty space").required("Search query is required."),
  });

  const CreateNewFAQSchema = yup.object().shape({
    question: yup.string().trim("Cannot be empty space").required("Question is required."),
    answer: yup.string().trim("Cannot be empty space").required("Answer is required."),
    category: yup.mixed().required("Category is required."),
  });

  const CreateNewBioLinkSchema = yup.object().shape({
    title: yup.string().trim("Cannot be empty space").required("Link title is required."),
    description: yup.string().trim("Cannot be empty space").required("Description is required."),
    link: yup.string().url("Must be a valid URL").trim("Cannot be empty space").required("Link is required."),
    coverImage: yup.mixed().nullable(),
  });


  const UpdateAdminDetails = yup.object().shape({
    firstName: yup.string().trim("Cannot be empty space").required("First name is required."),
    lastName: yup.string().trim("Cannot be empty space").required("Last name is required."),
    email: yup.string().trim("Cannot be empty space").required("Email is required.").email("Must be a valid email address"),
    image: yup.mixed().nullable(),
  });


  const ImportNewslettersSchema = yup.object({
    email: yup.mixed().nullable(),
  });


  const CreateNewInvoiceRequestSchema = yup.object({
    name: yup.string().trim("Cannot be empty space").required("Name is required."),
    email: yup.string().trim("Cannot be empty space").required("Email address is required.").email("Must be a valid email address"),
    phone: yup.string().trim("Cannot be empty space").required("Phone number is required."),
    address: yup.string().trim("Cannot be empty space").required("Address is required."),
    status: yup.mixed().required("Payment status is required."),
    discount: yup.string().trim("Cannot be empty space").required("Discount is required."),
    currency: yup.string(),
    taxRates: yup.number().required('Tax rate is required'),
    notes: yup.string().trim("Cannot be empty space").required("Note is required."),
    tax: yup.string().trim("Cannot be empty space"),
    items: yup.array().of(
      yup.object().shape({
        itemName: yup.string().required('Item name is required'),
        unitPrice: yup.string().required('Unit price is required'),
        quantity: yup.string().required('Quantity is required'),
      })
    ),
  });

  const CreateNewLifeStyleContentSchema = yup.object().shape({
    title: yup.string().trim("Cannot be empty space").required("Link title is required."),
    description: yup.string().trim("Cannot be empty space").required("Description is required."),
    youtubeLink: yup.string().url("Must be a valid URL").trim("Cannot be empty space").required("YouTube link is required."),
    coverImage: yup.mixed().nullable(),
  });


  const CreateNewPortfolioSchema = yup.object().shape({
    title: yup.string().trim("Cannot be empty space").required("Link title is required."),
    image: yup.mixed().nullable(),
  });


  const CreateNewProductSchema = yup.object().shape({
    name: yup.string().trim("Cannot be empty space").required("Product name is required."),
    price: yup.number().required("Product price is required."),
    description: yup.string().trim("Cannot be empty space").required("Description is required."),
    category: yup.mixed().required("Category is required."),
    amazonLink: yup.string().url("Must be a valid URL").trim("Cannot be empty space").required("Amazon link is required."),
    images: yup.mixed().nullable(),
  });


  const CreateNewAdditionalServicesSchema = yup.object().shape({
    quantity: yup.number().required('Quantity is required'),
    price: yup.number().required("Product price is required."),
  });

  const CreateNewServiceQuantityAndPriceInputsSchema = yup.object().shape({
    quantity: yup.number().required('Quantity is required'),
    itemName: yup.string().trim("Cannot be empty space").required("Item name is required."),
    unitPrice: yup.number().required("Unit price is required."),
  });

  const BookServiceYourInformationSchema = yup.object().shape({
    firstName: yup.string().trim("Cannot be empty space").required("First name is required."),
    lastName: yup.string().trim("Cannot be empty space").required("Last name is required."),
    email: yup.string().trim("Cannot be empty space").required("Email is required.").email("Must be a valid email address"),
    phoneNumber: yup.string().trim("Cannot be empty space").required("Phone number is required."),
    service_date: yup.string().trim("Cannot be empty space").required("Service date is required."),
    service_time: yup.string().trim("Cannot be empty space").required("Service time is required."),
    preferred_service_location: yup.mixed().required("Location is required."),
    address: yup.string(),
  });


  const BookServiceQuestionnaireSchema = yup.object().shape({
    price: yup.number(),
    package: yup.mixed().required("Package is required."),
  });


  const BookBridalServiceQuestionnaireSchema = yup.object().shape({
    trial_session_date: yup.string(),
    trial_session_time: yup.string(),
    price: yup.number(),
    package: yup.mixed().required("Package is required."),
    service_type: yup.mixed(),
    wedding: yup.mixed().required("Please select wedding type"),
    makeup_flower_girls: yup.mixed(),
    makeup_junior_brides: yup.mixed(),
    makeup_bridal_parties: yup.mixed(),
    mother_of_bride_makeup: yup.mixed(),
    mother_of_groom_makeup: yup.mixed(),
    groom_makeup: yup.mixed(),
  });

  const BookServiceConfirmationSchema = yup.object().shape({
    description: yup.string(),
    question_allergies: yup.mixed(),
    hear_about_us: yup.mixed().required("Please select an option"),
    status: yup.mixed().required("Please select an option"),
    terms_condition: yup.mixed(),
    question_picture: yup.mixed(),
  });




  const CreateNewAdminPackageSchema = yup.object().shape({
    package: yup.string().required('Package name is required').trim("Cannot be empty space"),
    description: yup.string().required('Description is required').trim("Cannot be empty space"),
    price: yup.number().required("Package price is required."),
    image: yup.mixed().nullable(),
    consultation: yup.mixed(),
    additionalServices: yup.mixed(),
  });


  const CreateNewPackageSchema = yup.object().shape({
    price: yup.number().nullable(),
    package: yup.mixed().nullable(),
    image: yup.mixed().nullable(),
    description: yup.string().nullable(),
    consultation: yup.mixed().nullable(),
    additionalServices: yup.mixed().nullable(),
    questionnaire: yup.mixed().nullable(),
    termsConditions: yup.mixed().nullable(),
    glamSessionAllergies: yup.mixed().nullable(),
    allergies: yup.mixed().nullable(),
  });

  const CreateNewClassSchema = yup.object().shape({
    package: yup.string().required('Package name is required').trim("Cannot be empty space"),
    description: yup.string().required('Description is required').trim("Cannot be empty space"),
    hours: yup.string().required('Duration is required').trim("Cannot be empty space"),
    price: yup.number().required("Package price is required."),
    image: yup.mixed().nullable(),
    consultation: yup.mixed(),
    type: yup.mixed().required("Package type is required."),
  });



  const SearchInvoiceSchema = yup.object().shape({
    q: yup.string().required('Search term is required').trim("Cannot be empty space"),
  });


  const ChooseAppointmentSchema = yup.object().shape({
    bookingItem: yup.mixed().required("Please select an option"),
    date: yup.string().required('Date is required').trim("Cannot be empty space"),
    time: yup.string().required('Time is required').trim("Cannot be empty space"),
  });

  const ConfirmationSchema = yup.object().shape({

    firstName: yup.string().required('First name is required').trim("Cannot be empty space"),
    lastName: yup.string().required('Last name is required').trim("Cannot be empty space"),
    phoneNumber: yup.string().required('Phone number is required').trim("Cannot be empty space"),
    email: yup.string().required('Email is required').trim("Cannot be empty space"),
  });























  return (
    {
      NewsletterSchema,
      ContactUsSchema,
      LoginSchema,
      ForgotPasswordSchema,
      CreateNewPasswordSchema,
      SearchSchema,
      CreateNewFAQSchema,
      CreateNewBioLinkSchema,
      CreateNewAdminPackageSchema,
      ChangePasswordSchema,
      UpdateAdminDetails,
      ImportNewslettersSchema,
      CreateNewInvoiceRequestSchema,
      CreateNewLifeStyleContentSchema,
      CreateNewPortfolioSchema,
      CreateNewProductSchema,
      CreateNewAdditionalServicesSchema,
      BookServiceYourInformationSchema,
      BookServiceQuestionnaireSchema,
      BookBridalServiceQuestionnaireSchema,
      BookServiceConfirmationSchema,
      CreateNewPackageSchema,
      CreateNewServiceQuantityAndPriceInputsSchema,
      SearchInvoiceSchema,
      ChooseAppointmentSchema,
      ConfirmationSchema,
      CreateNewClassSchema
    }
  )
}

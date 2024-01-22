import * as Yup from "yup"

export const CustomersSchema = Yup.object({
    userType: Yup.string().required('Please choose your account type.'),
    name: Yup.string().min(6,"The name must be of at least 6 characters.").required("Name is required."),
    email: Yup.string().email("Invalid email.").min(4).required("Email is required."),
    phone: Yup.number()//.required("Please enter your Phone Number!")
})

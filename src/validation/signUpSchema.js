import * as Yup from "yup";

const signUpSchema = Yup.object().shape({
    email: Yup
        .string()
        .email('Must be a valid email address.')
        .required('Email is Required'),
    password: Yup
        .string()
        .min(8, 'Password must be at least 8 characters long.')
        .required('Password is Required'),
    confirmPassword: Yup
        .string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Confirm Password is Required'),
})

export default signUpSchema;

import * as Yup from "yup";

//mixed.test(name: string, message: string, test: function)

const signUpSchema = Yup.object().shape({
    email: Yup
        .string()
        .email('Must be a valid email address.')
        .required('Email is Required'),
    password: Yup
        .string()
        .min(8, 'Password must be at least 8 characters long.')
        // .matches(
        //     /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        //     "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        // )
        .required('Password is Required'),

    confirmPassword: Yup
        .string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is Required'),
})
export default signUpSchema;

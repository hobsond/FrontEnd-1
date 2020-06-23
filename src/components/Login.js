import React, { useState, useEffect } from 'react';
import SignInForm from './SignInForm.js';
import SignUpForm from './SignUpForm.js';
import signInSchema from '../validation/signInSchema.js';
import signUpSchema from '../validation/signUpSchema.js';

import * as Yup from "yup";

const initialSignInFormValues = {
    email: '',
    password: ''
};
const initialSignInFormErrors = {
    email: '',
    password: ''
};
const initialSignUpFormValues = {
    email: '',
    password: '',
    confirmPassword: ''
};
const initialSignUpFormErrors = {
    email: '',
    password: '',
    confirmPassword: ''
};
const initialDisabled = true;


export default function Login() {
    const [signInFormValues, setSignInFormValues] = useState(initialSignInFormValues);
    const [signInFormErrors, setSignInFormErrors] = useState(initialSignInFormErrors);
    const [signUpFormValues, setSignUpFormValues] = useState(initialSignUpFormValues);
    const [signUpFormErrors, setSignUpFormErrors] = useState(initialSignUpFormErrors);
    const [disabled, setDisabled] = useState(initialDisabled);

    const signInOnInputChange = evt => {
        const { name, value } = evt.target
        Yup
            .reach(signInSchema, name)
            .validate(value)
            .then(() => {
                setSignInFormErrors({
                    ...signInFormErrors,
                    [name]: ""
                })
            })
            .catch(err => {
                setSignInFormErrors({
                    ...signInFormErrors,
                    [name]: err.errors[0]
                })
            })
        setSignInFormValues({
            ...signInFormValues,
            [name]: value,
        })
    };
    const signInOnSubmit = evt => {
        evt.preventDefault()

        const user = {
            email: signInFormValues.email.trim(),
            password: signInFormValues.password.trim(),
        };

        //axios sign in
        //Note to Michael: please remember to add the following:
        // .finally(() => {
        //     setSignInFormValues(initialSignInFormValues)
        // })
    };
    useEffect(() => {
        signInSchema.isValid(signInFormValues).then(valid => {
            setDisabled(!valid)
        })
    }, [signInFormValues])


    const signUpOnInputChange = evt => {
        const { name, value } = evt.target
        Yup
            .reach(signUpSchema, name)
            .validate(value)
            .then(() => {
                setSignUpFormErrors({
                    ...signUpFormErrors,
                    [name]: ""
                })
            })
            .catch(err => {
                setSignUpFormErrors({
                    ...signUpFormErrors,
                    [name]: err.errors[0]
                })
            })
        setSignUpFormValues({
            ...signUpFormValues,
            [name]: value,
        })
    };
    const signUpOnSubmit = evt => {
        evt.preventDefault()

        const user = {
            email: signInFormValues.email.trim(),
            password: signInFormValues.password.trim(),
        };

        //axios sign up

        //Note to Michael: please remember to add the following:
        // .finally(() => {
        //     setSignUpFormValues(initialSignUpFormValues)
        // })
    };
    useEffect(() => {
        signUpSchema.isValid(signUpFormValues).then(valid => {
            setDisabled(!valid)
        })
    }, [signUpFormValues])

    return (
        <div className='uk-grid-collapse uk-child-width-1-2@s uk-flex-middle uk-grid'>
            <div className='uk-background-cover uk-blend-luminosity uk-visible@s uk-height-viewport'
                style={{ backgroundImage: 'url("images/headphone.jpg")' }} >
            </div>
            <div className='uk-padding-large'>
                <div>
                    <ul className='uk-child-width-expand' data-uk-tab data-uk-switcher='connect: .uk-switcher'>
                        <li className='uk-active'>
                            <a href='#signIn'>Sign In</a>
                        </li>
                        <li>
                            <a href='#signUp'>Sing Up</a>
                        </li>
                    </ul>
                    <ul className='uk-switcher'>
                        <li id='signIn'>
                            <SignInForm
                                values={signInFormValues}
                                onSubmit={signInOnSubmit}
                                onInputChange={signInOnInputChange}
                                disabled={disabled}
                                formErrors={signInFormErrors}
                            />
                        </li>
                        <li id='signUp'>
                            <SignUpForm
                                values={signUpFormValues}
                                onSubmit={signUpOnSubmit}
                                onInputChange={signUpOnInputChange}
                                disabled={disabled}
                                formErrors={signUpFormErrors}
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
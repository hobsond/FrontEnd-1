import React from 'react';

export default function SignUpForm(props) {
    const {
        values,
        onSubmit,
        onInputChange,
        disabled,
        formErrors,
    } = props

    return (
        <form id='signUpForm' onSubmit={onSubmit}>
            <fieldset className='uk-fieldset uk-width-1-2@xl uk-margin-auto'>
                <div className='uk-margin'>
                    <input
                        className='uk-input'
                        name='signUpEmail'
                        type='email'
                        placeholder='Email'
                        onChange={onInputChange}
                        value={values.email}
                    />
                    <div className='uk-text-danger'>
                        <small>{formErrors.signUpEmail}</small>
                    </div>
                </div>

                <div className='uk-margin'>
                    <input
                        className='uk-input'
                        name='signUpPassword'
                        type='password'
                        placeholder='Password'
                        value={values.password}
                        onChange={onInputChange}
                    />
                    <div className='uk-text-danger'>
                        <small>{formErrors.signUpPassword}</small>
                    </div>
                </div>
                <div className='uk-margin'>
                    <input
                        className='uk-input'
                        type='password'
                        name='confirmPassword'
                        placeholder='Confirm Password'
                        value={values.confirmPassword}
                        onChange={onInputChange}
                    />

                    <div id='confirmError' className='uk-text-danger'>
                        <small>{formErrors.confirmPassword}</small>
                    </div>
                </div>
                <div className='uk-margin'>
                    <button className='uk-width-1-1 uk-button uk-button-primary' disabled={disabled}>
                        Sign Up
                    </button>
                </div>
            </fieldset>
        </form>
    )
}

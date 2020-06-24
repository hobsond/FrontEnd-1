import React from 'react';

export default function SignInForm(props) {
    const {
        values,
        onSubmit,
        onInputChange,
        disabled,
        formErrors,
    } = props

    return (
        <form id='signInForm' onSubmit={onSubmit}>
            <fieldset className='uk-fieldset uk-width-1-2@xl uk-margin-auto'>
                <div className='uk-margin'>
                    <input
                        className='uk-input'
                        name='signInEmail'
                        type='email'
                        placeholder='Email'
                        onChange={onInputChange}
                        value={values.email}
                    />
                    <div className='uk-text-danger'>
                        <small>{formErrors.email}</small>
                    </div>
                </div>

                <div className='uk-margin'>
                    <input
                        className='uk-input'
                        name='signInPassword'
                        type='text'
                        placeholder='Password'
                        value={values.password}
                        onChange={onInputChange}
                    />
                    <div className='uk-text-danger'>
                        <small>{formErrors.password}</small>
                    </div>
                </div>
                <div className='uk-margin'>
                    <button className='uk-width-1-1 uk-button uk-button-primary' disabled={disabled}>
                        Sign In
                    </button>
                </div>
                <div className='uk-margin uk-text-center'>
                    <a className='uk-button' href='#'>Forgot Password?</a>
                </div>

            </fieldset>
        </form>
    )
}
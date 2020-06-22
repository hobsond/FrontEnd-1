import React from 'react';

export default function Login() {

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
                            <form id='signInForm'>
                                <fieldset className='uk-fieldset uk-width-1-2@xl uk-margin-auto'>
                                    <div className='uk-margin'>
                                        <input className='uk-input' type='email' placeholder='Email' />
                                    </div>
                                    <div className='uk-margin'>
                                        <input className='uk-input' type='text' placeholder='Password' />
                                    </div>
                                    <div className='uk-margin'>
                                        <button className='uk-width-1-1 uk-button uk-button-primary' type='submit'>Sign
                                        In</button>
                                    </div>
                                    <div className='uk-margin uk-text-center'>
                                        <a className='uk-button' href='#'>Forgot Password?</a>
                                    </div>
                                </fieldset>
                            </form>
                        </li>
                        <li id='signUp'>
                            <form id='signUpForm'>
                                <fieldset className='uk-fieldset uk-width-1-2@xl uk-margin-auto'>
                                    <div className='uk-margin'>
                                        <input className='uk-input' type='email' placeholder='Email' />
                                    </div>
                                    <div className='uk-margin'>
                                        <input className='uk-input' type='text' placeholder='Password' />
                                    </div>
                                    <div className='uk-margin'>
                                        <input className='uk-input' type='text' placeholder='Confirm Password' />
                                    </div>
                                    <div className='uk-margin'>
                                        <button className='uk-width-1-1 uk-button uk-button-primary' type='submit'>
                                            Sign Up
                                        </button>
                                    </div>
                                </fieldset>
                            </form>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
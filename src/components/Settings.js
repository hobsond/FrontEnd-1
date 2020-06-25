import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import axios from "axios";
import axiosWithAuth from "axios";

export default function Settings() {
    let history = useHistory();

    const confirm = (e) => {
        e.preventDefault();
        let id = localStorage.getItem('userID');
        //axiosWithAuth()
        axios
            .delete( `https://spotify-suggestions-backend.herokuapp.com/api/user/${id}`)
            .then( (res) => console.log('Bon Voyage',res) )
            .catch( (err) => console.log(err) )

        history.push('/')
    };

    

    return (
        
        <section className='uk-section'>
            <div className='uk-container uk-container-small uk-text-center'>
                <form id='signInForm' onSubmit={confirm}>
                    <fieldset className='uk-fieldset uk-width-1-2@xl uk-margin-auto'>
 
                        <div className='uk-margin'>

                            <button className='uk-width-1-1 uk-button uk-button-primary' >

                                DELETE ACCOUNT

                            </button>

                        </div>

                    </fieldset>
                </form>
            </div>
        </section>

    )
}
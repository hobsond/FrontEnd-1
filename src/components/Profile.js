import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import axios from "axios";
import axiosWithAuth from "axios";

import { useRecoilState } from 'recoil'
import { credentialsState } from '../store/states'

export default function Profile() {
    const [credentials, setCredentials] = useRecoilState(credentialsState);
    //const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const history = useHistory();

    const handleChange = (e) => setCredentials({ ...credentials, [e.target.name]: e.target.value });

    const confirm = (e) => {
        e.preventDefault();
        let id = localStorage.getItem('userID');
        //axiosWithAuth()
        axios
            .put(`https://spotify-suggestions-backend.herokuapp.com/api/user/${id}`, credentials)
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
    };

    useEffect(() => {
        let id = localStorage.getItem('userID');
        console.log(`/api/user/${id}`);
        //axiosWithAuth()
        axios
            .get(`https://spotify-suggestions-backend.herokuapp.com/api/user/${id}`)
            .then((res) => {
                if (res.data.phoneNumber) { setCredentials({ phoneNumber: res.data.phoneNumber }) }
                if (res.data.username) { setCredentials({ username: res.data.username }) }
            })
            .catch((err) => console.log(err))
    }, []);




    return (

        <section className='uk-section'>
            <div className='uk-container uk-container-small uk-text-center'>
                <h1 className='uk-text-primary'>Profile</h1>
                <form id='signInForm' onSubmit={confirm}>
                    <fieldset className='uk-fieldset uk-width1-1 uk-margin-auto'>
                        <label className='uk-form-label' htmlFor='profile-username'>Username</label>
                        <div className='uk-margin'>
                            <div className='uk-inline'>
                                <span className="uk-form-icon" uk-icon="icon: user"></span>
                                <input
                                    id='profile-username'
                                    className='uk-input'
                                    name='username'
                                    type='text'
                                    onChange={handleChange}
                                    value={credentials.username}
                                />
                                <div className='uk-text-danger'>
                                    {error.username && <small> {error.username} </small>}
                                </div>
                            </div>
                        </div>
                        <label className='uk-form-label' htmlFor='profile-username'>Phone Number</label>
                        <div className='uk-margin'>
                            <div className='uk-inline'>
                                <span className="uk-form-icon" uk-icon="icon: phone"></span>
                                <input
                                    className='uk-input'
                                    name='phoneNumber'
                                    type='text'
                                    onChange={handleChange}
                                    value={credentials.phoneNumber}
                                />
                                <div className='uk-text-danger'>
                                    {error.phoneNumber && <small> {error.phoneNumber} </small>}
                                </div>
                            </div>
                        </div>
                        <div className='uk-margin'>

                            <button className='uk-margin-top uk-button uk-button-primary' style={{ width: '219px' }}>
                                Confirm
                            </button>

                        </div>

                    </fieldset>
                </form>
            </div>
        </section>
    )
}
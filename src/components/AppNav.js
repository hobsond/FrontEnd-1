import React from 'react';
import AppMenu from './AppMenu.js';
import { Link } from 'react-router-dom';

export default function AppNav() {

    return (
        <div className='uk-background-secondary'>
            <nav className='uk-navbar-container uk-navbar-transparent uk-navbar'>
                <div className='uk-navbar-left uk-margin-left'>
                    <ul className='uk-navbar-nav'>
                        <li>
                            <button id='appMenuOpenButton' className='uk-navbar-toggle button-link' onClick={() => document.getElementById("appMenu").classList.remove("uk-hidden")} type='button'>
                                <i className='fal fa-bars'></i>
                            </button>
                        </li>
                        <li>
                            <button className='uk-navbar-toggle uk-toggle button-link' uk-toggle='target: #search'>
                                <i className='fal fa-search'></i>
                            </button>
                        </li>
                    </ul>
                </div>

                <div className='uk-navbar-right uk-margin-right'>
                    <ul className='uk-navbar-nav'>
                        <li>
                            <button uk-toggle='target: #playQueue' className='uk-navbar-toggle uk-toggle button-link'>
                                <i className='fal fa-list-alt'></i>
                            </button>
                        </li>
                        <li>
                            <button className='uk-margin-right uk-padding-remove-right button-link'>
                                <img className='uk-border-circle uk-blend-luminosity' width='35' height='35' src='images/profile-image.png' />
                            </button>
                            <div className='uk-background-secondary' uk-dropdown='pos: top-right; mode: click;animation: uk-animation-slide-bottom-small; duration: 1000'>
                                <ul className='uk-nav uk-dropdown-nav'>
                                    <li className='uk-nav-header'>Maryam Mosstoufi</li>
                                    <li><Link to={''}><i className='fal fa-user uk-margin-right'></i>Profile</Link></li>
                                    <li><Link to={''}><i className='fal fa-cog uk-margin-right'></i>Settings</Link></li>
                                    <li className='uk-nav-divider'></li>
                                    <li><Link to={''} id='signOut'><i className='fal fa-power-off uk-margin-right'></i>Sign Out</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
            <AppMenu />
        </div>
    )
}
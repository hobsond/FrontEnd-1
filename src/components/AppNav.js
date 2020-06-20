import React from 'react';

export default function AppNav() {
    return (
        <div className='uk-background-secondary'>
            <nav className='uk-navbar-container uk-navbar-transparent uk-navbar'>
                <div className='uk-navbar-left uk-margin-left'>
                    <ul className='uk-navbar-nav'>
                        <li><a href='#' id='appMenuOpenButton' onclick='openAppMenu()' type='button'><i className='fal fa-bars'></i></a></li>
                        <li><a className='uk-navbar-toggle uk-toggle' uk-toggle='target: #search'><i className='fal fa-search'></i></a></li>
                    </ul>
                </div>

                <div className='uk-navbar-right uk-margin-right'>
                    <ul className='uk-navbar-nav'>
                        <li>
                            <a uk-toggle='target: #playQueue' className='uk-toggle'>
                                <i className='fal fa-list-alt'></i>
                            </a>
                        </li>
                        <li>
                            <a className='uk-margin-right uk-padding-remove-right' href='#'>
                                <img className='uk-border-circle uk-blend-luminosity' width='35' height='35' src='images/profile-image.png' />
                            </a>
                            <div className='uk-background-secondary' uk-dropdown='pos: top-right; mode: click;animation: uk-animation-slide-bottom-small; duration: 1000'>
                                <ul className='uk-nav uk-dropdown-nav'>
                                    <li className='uk-nav-header'>Maryam Mosstoufi</li>
                                    <li><a href='#'><i className='fal fa-user uk-margin-right'></i>Profile</a></li>
                                    <li><a href='#'><i className='fal fa-cog uk-margin-right'></i>Settings</a></li>
                                    <li className='uk-nav-divider'></li>
                                    <li><a id='signOut' href='#'><i className='fal fa-power-off uk-margin-right'></i>Sign Out</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
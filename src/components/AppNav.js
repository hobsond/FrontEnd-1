import React from 'react';
import AppMenu from './AppMenu.js';
import { Link } from 'react-router-dom';

export default function AppNav() {
    // Song Playing
    function playAudio() {
        document.getElementById('audioPlayer').play();
        document.getElementById('playButton').classList.add('uk-hidden');
        document.getElementById('pauseButton').classList.remove('uk-hidden');
        document.getElementById('songCover').classList.add('spin');
        document.getElementById('songCover').classList.remove('spin-paused');
    }
    // Song Paused
    function pauseAudio() {
        document.getElementById('audioPlayer').pause();
        document.getElementById('pauseButton').classList.add('uk-hidden');
        document.getElementById('playButton').classList.remove('uk-hidden');
        document.getElementById('songCover').classList.add('spin-paused');
    }

    return (
        <div className='uk-background-secondary'>
            <nav className='uk-navbar-container uk-navbar-transparent uk-navbar'>
                <div className='uk-navbar-left uk-margin-left'>
                    <ul className='uk-navbar-nav'>
                        <li>
                            <button id='appMenuOpenButton' className='uk-navbar-toggle button-link' onClick={() => document.getElementById('appMenu').classList.remove('uk-hidden')} type='button'>
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
                <div className='uk-navbar-center'>
                    <audio id='audioPlayer' src='media/StillWoozy-Window.mp3' type='audio/mpeg' preload='auto'></audio>
                    <ul id='mediaPlayer' className='uk-navbar-nav'>
                        <li className='uk-visible@m'>
                            <a href='#'>
                                <img className='uk-border-circle' src='images/album-cover.jpg' width='50' height='50' />
                            </a>
                        </li>
                        <li className='uk-visible@m'>
                            <div className='uk-padding-small'>
                                <a href='#' className='uk-text-top'>Window</a>
                                <br />
                                <a href='#'><small>Still Woozy</small></a>
                            </div>
                        </li>
                        <li>
                            <a><i className='fal fa-backward'></i></a>
                        </li>
                        <li>
                            <a id='playButton' onClick={playAudio}><i className='fal fa-play fa-2x'></i></a>
                        </li>
                        <li>
                            <a id='pauseButton' onClick={pauseAudio} className='uk-hidden'><i className='fal fa-pause fa-2x'></i></a>
                        </li>
                        <li>
                            <a><i className='fal fa-forward'></i></a></li>
                        <li>
                            <div id='waveform'></div>
                        </li>
                        <li className='uk-visible@m'>
                            <a className='time'>
                                <span id='audioPassedTime'>0:00</span>
                                <span className='divider'>&nbsp; / &nbsp;</span>
                                <span id='audioDurationTime'></span>
                            </a>
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
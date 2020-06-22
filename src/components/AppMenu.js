import React from 'react';
import { Link } from 'react-router-dom';

export default function AppMenu() {
    return (
        <div id='appMenu' className='uk-hidden'>
            <div className='large-circle circle'></div>
            <div className='medium-circle circle'></div>
            <ul className='app-menu-list'>
                <li>
                    <Link className='top-icon-medium-circle' to={'/home'}>
                        <i className='fal fa-home'></i>
                    </Link>
                </li>
                <li>
                    <Link className='bottom-icon-large-circle uk-link-toggle' to={'/favorites'}>
                        <i className='fal fa-heart-square'></i>
                    </Link>
                </li>
                <li>
                    <Link className='middle-icon-large-circle' to={'/playlists'}>
                        <i className='fal fa-list-music'></i>
                    </Link>
                </li>
                <li>
                    <Link className='top-icon-large-circle' to={'/albums'}>
                        <i className='fal fa-album-collection'></i>
                    </Link>
                </li>
                <li>
                    <Link className='bottom-icon-medium-circle' to={'/playing'}>
                        <i className='fal fa-compact-disc'></i>
                    </Link>
                </li>
            </ul>
            <div className='small-circle'>
                <button id='appMenuCloseButton' className='button-link' onClick={() => document.getElementById("appMenu").classList.add("uk-hidden")} type='button'><i className='fal fa-times'></i></button>
            </div>
        </div>
    )
}
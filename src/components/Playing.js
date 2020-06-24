/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import RecommendedList from './RecommendedList.js';
import { axiosWithAuth } from '../utils/axiosWithAuth'

function myFunction() {
    axiosWithAuth()
        .get("/api/spotify/connect")
        .then((res) => {

            //localStorage.setItem("token", res.data.token);
            window.location = res.data.data;
            console.log(res)
            //history.push('/ezClap')
        })
        .catch((err) => console.log(err));
};


export default function Playing(props) {
    const {
        playing,
        paused
    } = props;
    setTimeout(function () {
        if (playing) {
            document.getElementById('songCover').classList.add('spin');
            document.getElementById('songCover').classList.remove('spin-paused');
        } else if (paused) {
            document.getElementById('songCover').classList.add('spin-paused');
        }
    }, 100);

    //storing/setting song suggestion data here
    const [suggestions, setSuggestions] = useState([]);

    //when Playing component loads make authenticated request for suggestions songs
    useEffect(() => {
        console.log(localStorage.userID)
        axiosWithAuth()
            .get(`/api/user/${localStorage.userID}/suggestions`)
            .then((res) => setSuggestions(res.data))
            .catch((err) => console.log(err))
    }, []);

    return (
        <div id='song-playing' className='song-playing uk-container uk-margin-xlarge-bottom' >
            {/* <button onClick={() => myFunction()}>Button of Death</button> */}
            <div className='uk-grid uk-child-width-1-1'>
                <div>
                    <div className='album-cover uk-margin-auto'>
                        <img id='songCover' className='uk-border-circle' src='images/album-cover.jpg' alt='Album Cover' />
                        {/* Source of this image needs to be replaced with album cover image of song playing */}
                        <nav className='song-nav'>
                            <div className='song-nav-bg nav-toggle'></div>
                            <a className='menu-toggler nav-toggle' uk-toggle='target: .nav-toggle; cls: toggled-open'>
                                <i className='fal fa-bars'></i>
                                <i className='fal fa-times'></i>
                            </a>
                            <ul>
                                <li className='menu-item'>
                                    <a className='fal fa-music-slash' href='#' target='_blank'>&nbsp; </a>
                                </li>
                                <li className='menu-item'>
                                    <a className='fal fa-share-square' href='#' target='_blank'></a>
                                </li>
                                <li className='menu-item'>
                                    <a className='fal fa-heart' href='#' target='_blank'></a>
                                </li>
                                <li className='menu-item'>
                                    <a className='fal fa-list-music' href='#' target='_blank'></a>
                                </li>
                                <li className='menu-item'>
                                    <a className='fal fa-album' href='#' target='_blank'></a>
                                </li>
                                <li className='menu-item'>
                                    <a className='fal fa-cloud-music' href='#' target='_blank'></a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <RecommendedList suggestions={suggestions} />
            </div>
        </div>
    )
}

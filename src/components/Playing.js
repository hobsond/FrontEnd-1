/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import RecommendedList from './RecommendedList.js';
import { axiosWithAuth } from '../utils/axiosWithAuth'
import  axios  from 'axios'

import { useRecoilState } from 'recoil'
import { currentSongState, isPlayingState } from '../store/states'

export default function Playing() {
    const currentSong = useRecoilState(currentSongState)
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState)
    const pack = []
    let [predict, setPredict] = useState([]);
    const [predictTrack, setPredictTrack] = useState(pack);
    
    //when Playing component loads make authenticated request for suggestions songs
    //console.log('hello my dude')
    //console.log(currentSong[0].id.toString())
    useEffect(() => {
        axios
        .post( `https://bw3-ds.herokuapp.com/predict_all`, {"trackid" : "7fPuWrlpwDcHm5aHCH5D9t"})
        .then( (res) => {
            //console.log(res.data);
            setPredict(res.data)
            res.data.map(item => { //console.log(item.track_id)
                axios
                    .post( `https://bw3-ds.herokuapp.com/track`, {"trackid" : item.track_id})
                    .then( (res) => {
                        pack.push(res.data)
                        //console.log(res.data); 
                        setPredictTrack(pack)
                        })
                    .catch( (err) => console.log(err) )            
            });
           
        } )
        .catch( (err) => console.log(err) )
        
    }, []);

    function favorite(e){
        console.log(e)
        e.preventDefault();
        console.log('this song is now a favorite')
    }
    /*
        console.log('the bag is secured')
        console.log(predictTrack)
        console.log(predict)
    */
    return (
        <div id='song-playing' className='song-playing uk-container uk-margin-xlarge-bottom' >
            <div className='uk-grid uk-child-width-1-1'>
                <div>
                    <div className='album-cover uk-margin-auto'>
                        <img
                            id='songCover'
                            className={`uk-border-circle spin ${!isPlaying ? 'spin-paused' : ''}`}
                            alt='Album Cover'
                            src={currentSong[0].artMedium}
                        />
                        {/* Added the state for the source image but it is rendering too small? Maybe we can fix it with styling? */}
                        {/* The size only gets messed up after changing songs with the new src code  */}
                        <nav className='song-nav'>
                            <div className='song-nav-bg nav-toggle'></div>
                            <a className='menu-toggler nav-toggle' uk-toggle='target: .nav-toggle; cls: toggled-open'>
                                <i className='fal fa-bars'></i>
                                <i className='fal fa-times'></i>
                            </a>
                            <ul>
                                <li className='menu-item'>
                                    <a className='fal fa-music-slash' href='#' target='_blank'></a>
                                </li>
                                <li className='menu-item'>
                                    <a className='fal fa-share-square' href='#' target='_blank'></a>
                                </li>
                                <li className='menu-item' onClick={e => favorite(e)}>
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
                    <div className='uk-text-center uk-margin-top'>
                        <h1 className='uk-text-primary'>{currentSong[0].title}</h1>
                        <div className='uk-margin-bottom'>
                            <h3 className='uk-inline uk-margin-remove'><i className='fal fa-user-music'>&nbsp;</i></h3>
                            <h3 className='uk-inline uk-margin-remove'>{currentSong[0].artist} </h3>
                        </div>
                        <div>
                            <h4 className='uk-inline uk-margin-remove uk-text-muted'><i className='fal fa-album'>&nbsp;</i></h4>
                            <h4 className='uk-inline uk-margin-remove uk-text-muted'>{currentSong[0].album}</h4>
                        </div>
                    </div>
                </div>
                <RecommendedList predictTrack={predictTrack} predict={predict} />
            </div>
        </div>
    )
}

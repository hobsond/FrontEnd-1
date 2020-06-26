import React, {useState, useLayoutEffect} from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import axios from 'axios'
import {milliToMin} from '../utils/tools'

import { useRecoilState } from 'recoil'
import { dataState } from '../store/states'
import AlbumPage from './AlbumPage';

export default function RecommendedCard(props) {
<<<<<<< HEAD
    const [data, setData] = useState(
        {
            name: 'loading',
            artists:[{name:'loading'}],
            album:{ 
                images:[{url: 'urlplz'}],
                name: 'loading',
                },
            duration_ms:0,
            id:null,
            preview_url:null,
        }
    )
=======

    const [data, setData] = useState({})
>>>>>>> a71ab16dc84b5b2503cb7602c691ca14401f1e59
    //let data = {};
    //console.log('hi')
    //console.log(props)
    //console.log('pack')
    //console.log(props.pack)
    /*
    axios
    .post( `https://bw3-ds.herokuapp.com/track`, {"trackid" : props.song.track_id} )
    .then( (res) => {res.data})
    .catch( (err) => console.log(err) )*/

    const chartData = [
        {
            id: `${props.song.track_id}`,
            acousticness: `${props.song.acousticness}`,
            danceability: `${props.song.danceability}`,
            energy: `${props.song.energy}`,
            instrumentalness: `${props.song.instrumentalness}`,
            liveness: `${props.song.liveness}`,
            loudness: `${props.song.loudness}`,
            tempo: `${props.song.tempo}`,
            valence: `${props.song.valence}`,
            //sum: `${props.song.sum}`,
        }
    ];
    console.log(props.song);
    console.log('cool')


//console.log(data)
    
    useLayoutEffect(() => {

    axios
    .post( `https://bw3-ds.herokuapp.com/track`, {"trackid" : props.song.track_id})
    .then( (res) =>  setData(res.data)
    )
    .catch( (err) => console.log(err) )
    
    }, [setData]);

    console.log(document.pleaseGod)


    /*
    useEffect(() => {
        axios
            .post( `https://bw3-ds.herokuapp.com/track`, {"trackid" : props.song.track_id})
            .then( (res) => {console.log(res.data); console.log('hello')} )
            .catch( (err) => console.log(err) )
    }, []);
    

    //const name = data.name
    
    /*const data = {
        id: props.song.id,
        artists: props.song.artist,
        title: props.song.name,
        album: props.song.album,
        albumId: props.album_id,
        art: props.song.album_url,
        audio: props.song.preview_url,
        duration: props.song.duration,
        //uri: props.song. ,
        artistUrl: props.song.external_url, //artist page
        titleUrl: props.song.external_url, //song page
        albumUrl: props.song.external_url, 
    }*/


    return (
        <li className='uk-margin-remove-top'>
            <div className='uk-padding-small uk-grid-medium uk-grid'>
                <div className='uk-width-auto'>
                    <img className='uk-comment-avatar' src={data.album.images[0].url}
                        width='50' height='50' alt='' />
                    {/* Source of this image needs to be replaced with album cover of song being recommended */}
                </div>
                <div className='uk-width-expand'>
                    <h4 className='uk-comment-title uk-margin-remove'>
                        <a className='uk-link-reset' href='#'>{data.name}</a>
                    </h4>
                    <small className=' uk-float-right'>{milliToMin(data.duration_ms)}</small>
                    {/* Song Duration to go here */}
                    <p className='uk-comment-meta uk-margin-remove-top'>
                        <i className='fal fa-user-music'></i>
                        <a className='uk-link-reset uk-margin-small-left' href='#'>{data.artists[0].name}</a>
                        {/* Artist Name to go here */}
                        <span className='uk-padding-small'>|</span>
                        <i className='fal fa-album'></i>
                        <a className='uk-link-reset uk-margin-small-left' href='#'>{data.album.name}</a>
                        {/* Album Title to go here */}
                    </p>
                    <div className='uk-height-small'>
                        <ResponsiveContainer>
                            <BarChart
                                data={chartData}
                                layout='vertical'
                            >
                                <XAxis type='number' hide />
                                <YAxis type='category' hide />

                                <Bar dataKey='acousticness' stackId='id' fill='#FC5163' stroke='#0c101b' strokeWidth='2' />
                                <Bar dataKey='danceability' stackId='id' fill='#F98B81' stroke='#0c101b' strokeWidth='2' />
                                <Bar dataKey='energy' stackId='id' fill='#F6C59F' stroke='#0c101b' strokeWidth='2' />
                                <Bar dataKey='instrumentalness' stackId='id' fill='#F3FFBD' stroke='#0c101b' strokeWidth='2' />
                                <Bar dataKey='liveness' stackId='id' fill='#B2DBBF' stroke='#0c101b' strokeWidth='2' />
                                <Bar dataKey='loudness' stackId='id' fill='#70C1B3' stroke='#0c101b' strokeWidth='2' />
                                <Bar dataKey='tempo' stackId='id' fill='#4A9EAA' stroke='#0c101b' strokeWidth='2' />
                                <Bar dataKey='valence' stackId='id' fill='#247BA0' stroke='#0c101b' strokeWidth='2' />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </li>
    )
}
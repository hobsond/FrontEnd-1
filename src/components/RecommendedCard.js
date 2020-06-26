import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

export default function RecommendedCard(props) {
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

    const data = {
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
    }

    return (
        <li className='uk-margin-remove-top'>
            <div className='uk-padding-small uk-grid-medium uk-grid'>
                <div className='uk-width-auto'>
                    <img className='uk-comment-avatar' src='images/album-cover.jpg'
                        width='50' height='50' alt='' />
                    {/* Source of this image needs to be replaced with album cover of song being recommended */}
                </div>
                <div className='uk-width-expand'>
                    <h4 className='uk-comment-title uk-margin-remove'>
                        <a className='uk-link-reset' href='#'>Song Title</a>
                    </h4>
                    <small className=' uk-float-right'>02:39</small>
                    {/* Song Duration to go here */}
                    <p className='uk-comment-meta uk-margin-remove-top'>
                        <i className='fal fa-user-music'></i>
                        <a className='uk-link-reset uk-margin-small-left' href='#'>Artist Name</a>
                        {/* Artist Name to go here */}
                        <span className='uk-padding-small'>|</span>
                        <i className='fal fa-album'></i>
                        <a className='uk-link-reset uk-margin-small-left' href='#'>Album Title</a>
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
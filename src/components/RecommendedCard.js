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
            valence: `${props.song.valence}`
        }
    ];

    return (
        <li className='uk-margin-remove-top'>
            <div className='uk-padding-small uk-grid-medium uk-grid'>
                <div className='uk-width-auto'>
                    <img className='uk-comment-avatar uk-border-circle' src='images/album-cover.jpg'
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

                                <Bar dataKey='acousticness' stackId='id' fill='#910d27' stroke='#0c101b' strokeWidth='2' />
                                <Bar dataKey='danceability' stackId='id' fill='#b0102f' stroke='#0c101b' strokeWidth='2' />
                                <Bar dataKey='energy' stackId='id' fill='#cf1337' stroke='#0c101b' strokeWidth='2' />
                                <Bar dataKey='instrumentalness' stackId='id' fill='#d63655' stroke='#0c101b' strokeWidth='2' />
                                <Bar dataKey='liveness' stackId='id' fill='#dd5a73' stroke='#0c101b' strokeWidth='2' />
                                <Bar dataKey='loudness' stackId='id' fill='#e57d91' stroke='#0c101b' strokeWidth='2' />
                                <Bar dataKey='tempo' stackId='id' fill='#eca1af' stroke='#0c101b' strokeWidth='2' />
                                <Bar dataKey='valence' stackId='id' fill='#f3c4cd' stroke='#0c101b' strokeWidth='2' />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </li>
    )
}
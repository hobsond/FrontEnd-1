import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export default function RecommendedCard(props) {
    // const {
    //     acousticness,
    //     danceability,
    //     energy,
    //     liveness,
    //     loudness,
    //     tempo,
    //     valence
    // } = props
    console.log('props', props)
    console.log(`${props.acousticness}`)

    const chartData = [
        {
            //id: `${props.song.track_id}`,
            acousticness: `${props.song.acousticness}`,
            danceability: `${props.song.danceability}`,
            energy: `${props.song.energy}`,
            liveness: `${props.song.liveness}`,
            loudness: `${props.song.loudness}`,
            tempo: `${props.song.tempo}`,
            valence: `${props.song.valence}`
        }
    ];
    // const testData = [{
    //     name: 'some name',
    //     pv: `${props.song.acousticness}`,
    //     uv: `${props.song.energy}`
    // }]

    console.log('chartData', chartData)
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
                                layout="vertical"
                            >

                                <XAxis type="number" hide />
                                <YAxis type="category" hide />
                                {/* <Tooltip /> */}
                                <Bar dataKey='acousticness' stackId="a" fill="#e6153d" />
                                <Bar dataKey='danceability' stackId="a" fill="#e92c50" />
                                <Bar dataKey='energy' stackId="a" fill="#ff4569" />
                                <Bar dataKey='liveness' stackId="a" fill="#ff748f" />
                                <Bar dataKey='loudness' stackId="a" fill="#ff8ba2" />
                                <Bar dataKey='tempo' stackId="a" fill="#ffa2b4" />
                                <Bar dataKey='valence' stackId="a" fill="#ffb9c7" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </li>
    )
}
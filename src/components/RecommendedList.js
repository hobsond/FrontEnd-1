import React from 'react';
import RecommendedCard from './RecommendedCard.js';

const recommendedList = [
    { "track_id": "48x1VbWiN6kiJAdGBISzhn", "acousticness": 0.1465749616, "danceability": 0.102366373, "energy": 0.1062800114, "instrumentalness": 0.1156001727, "liveness": 0.055479297, "loudness": 0.4904812343, "tempo": 0.0962172037, "valence": 0.1422721651, "sum": 1.2552714188 },
    { "track_id": "2XZt5ACXfEiF9QyxMnwaIr", "acousticness": 0.1493937108, "danceability": 0.0431016307, "energy": 0.2581085992, "instrumentalness": 0.3302862076, "liveness": 0.0453921521, "loudness": 0.4591384498, "tempo": 0.0786437285, "valence": 0.0076903873, "sum": 1.3717548661 },
    { "track_id": "6rPeI30oZ1yoATa1cDmEFS", "acousticness": 0.1324812153, "danceability": 0.0431016307, "energy": 0.0265700029, "instrumentalness": 0.3302862076, "liveness": 0.0453921521, "loudness": 0.6311903307, "tempo": 0.086443374, "valence": 0.1268913905, "sum": 1.4223563039 },
    { "track_id": "3dAOzj0Yb3hHD6sllOKtZR", "acousticness": 0.011274997, "danceability": 0.1616311153, "energy": 0.1024842967, "instrumentalness": 0.3302862076, "liveness": 0.4186165141, "loudness": 0.1128673676, "tempo": 0.0617822542, "valence": 0.2691635555, "sum": 1.4681063082 },
    { "track_id": "2iqi3UbkTjkpQJSMII3arQ", "acousticness": 0.1775812035, "danceability": 0.0269385192, "energy": 0.0835057233, "instrumentalness": 0.3297313268, "liveness": 0.30765792, "loudness": 0.3679442842, "tempo": 0.0438851423, "valence": 0.1768789079, "sum": 1.5141230272 },
    { "track_id": "5OsXhFFtEXrVV3eaPWFrFA", "acousticness": 0.2029499468, "danceability": 0.0969786692, "energy": 0.0721185792, "instrumentalness": 0.3302862076, "liveness": 0.0353050072, "loudness": 0.1903907442, "tempo": 0.3935099157, "valence": 0.2691635555, "sum": 1.5907026255 },
    { "track_id": "2x0supcZhd6NEH1nem9DnR", "acousticness": 0.0563749852, "danceability": 0.0646524461, "energy": 0.0835057233, "instrumentalness": 0.3302862076, "liveness": 0.5245315357, "loudness": 0.1393753609, "tempo": 0.3530553229, "valence": 0.088439454, "sum": 1.6402210357 },
]
export default function Recommended() {
    return (
        <div>
            <div className='uk-width-1-1'>
                <div className='uk-card uk-card-secondary uk-margin-xlarge-top'>
                    <div className='uk-card-body'>
                        <h3 className='uk-card-title'>Top 10 Suggestions</h3>
                        <div className='uk-flex uk-flex-center'>
                            <div className='uk-padding-small'><span style={{ background: '#FC5163' }}>&nbsp; &nbsp; &nbsp;</span> Acousticness</div>
                            <div className='uk-padding-small'><span style={{ background: '#F98B81' }}>&nbsp; &nbsp; &nbsp;</span> Danceability</div>
                            <div className='uk-padding-small'><span style={{ background: '#F6C59F' }}>&nbsp; &nbsp; &nbsp;</span> Energy</div>
                            <div className='uk-padding-small'><span style={{ background: '#F3FFBD' }}>&nbsp; &nbsp; &nbsp;</span> Instrumentalness</div>
                            <div className='uk-padding-small'><span style={{ background: '#B2DBBF' }}>&nbsp; &nbsp; &nbsp;</span> Liveness</div>
                            <div className='uk-padding-small'><span style={{ background: '#70C1B3' }}>&nbsp; &nbsp; &nbsp;</span> Loudness</div>
                            <div className='uk-padding-small'><span style={{ background: '#4A9EAA' }}>&nbsp; &nbsp; &nbsp;</span> Tempo</div>
                            <div className='uk-padding-small'><span style={{ background: '#247BA0' }}>&nbsp; &nbsp; &nbsp;</span> Valence</div>
                        </div>
                        <div>
                            <ul className='uk-list uk-list-divider'>
                                {
                                    recommendedList.map(song => {
                                        return (
                                            <RecommendedCard key={song.track_id} song={song}></RecommendedCard>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
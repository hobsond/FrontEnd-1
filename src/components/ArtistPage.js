import React from 'react';
import SongCard from './SongCard.js';


export default function AlbumPage() {
    const albumTitle = 'AlbumTitle'
    const albumCover = 'images/album-cover.jpg';
    const albumArtist = 'Artist Name';
    const songInfo = {};

    return (
        <section id='favorites' className='uk-section'>

            <div className='uk-container uk-margin-large-bottom'>
                <div className='uk-margin-large-bottom'>
                    <img className='uk-margin-right' src={albumCover} width="200" height="200" alt='Album Cover' />
                    <span className='uk-inline'>
                        <h1 className='uk-block uk-text-primary uk-margin-remove'>{albumTitle}</h1>
                        <h3 className='uk-block uk-text-left'>{albumArtist}</h3>
                    </span>
                </div>

                <div>
                    <ul className='uk-list uk-list-divider'>
                        <SongCard songInfo={songInfo} />
                        {/* Map over songs in the album and return the SongCard for each */}
                    </ul>
                </div>
            </div>
        </section>
    )
}
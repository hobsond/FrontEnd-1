import React from 'react';
import SongCard from './SongCard.js';


export default function AlbumPage() {
    return (
        <section id='favorites' className='uk-section'>
            <div className='uk-container uk-margin-large-bottom'>
                <h1 className='uk-text-center uk-text-primary uk-margin-large-bottom'>Favorites</h1>
                <div>
                    <ul className='uk-list uk-list-divider'>
                        <SongCard />
                        {/* Map over songs in the album and return the SongCard for each */}
                    </ul>
                </div>
            </div>
        </section>
    )
}
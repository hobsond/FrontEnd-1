import React from 'react';
import SongCard from './SongCard.js';

export default function Favorites(props) {
    //console.log(props);
    const songList = props.favorites.data.items;
    //console.log(songList);
    return (
        <section id='favorites' className='uk-section'>
            <div className='uk-container uk-margin-large-bottom'>
                <h1 className='uk-text-center uk-text-primary uk-margin-large-bottom'>Favorites</h1>
                <div>
                    <ul className='uk-list uk-list-divider'>
                        {
                            songList.map(song => (
                            song.track.preview_url
                            ? < SongCard key={song.track.id} song={song} />
                            : <div></div> )
                        )}
                        
                    </ul>
                </div>
            </div>
        </section>
    )
}
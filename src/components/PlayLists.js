import React from 'react';
import PlayListsCard from './PlayListsCard.js';

export default function PlayLists(props) {
    const playlists = props.playlists.data.items;
    console.log(playlists);

    return (
        <section id='playLists' className='uk-section'>
            <div className='uk-container uk-margin-large-bottom'>
                <h1 className='uk-text-center uk-text-primary uk-margin-large-bottom'>Play Lists</h1>
                <div className='uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l uk-text-center uk-grid'
                    data-uk-grid='parallax: 150; masonry: true'>
                    {
                        playlists.map(playlist => {
                            return (
                                <PlayListsCard key={playlist.id} playlist={playlist} />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}
import React from 'react';
import PlayListPageCard from './PlayListPageCard.js';

export default function PlayListPage(props) {
    const songs = props.playlist.data.items;
    // console.log('props', props);
    // console.log('songs', songs);

    // const playlistCover = props.playlist.images[0].url;
    // const playlistTitle = props.playlist.name;
    // const playlistDescription = props.playlist.description;
    // const playlistBy = props.playlist.owner.display_name;
    // const playlistId = props.playlist.id;

    return (
        <section id='favorites' className='uk-section song-list'>

            <div className='uk-container uk-margin-large-bottom'>
                <div className='uk-margin-large-bottom'>
                    {/* <img className='uk-margin-right' src={playlistCover} width="200" height="200" alt='Album Cover' />
                    <span className='uk-inline'>
                        <h1 className='uk-block uk-text-primary uk-margin-remove'>{playlistTitle}</h1>
                        <h3 className='uk-block uk-text-left'>By  {playlistBy}</h3>
                    </span> */}
                </div>

                <div>
                    <ul className='uk-list uk-list-divider'>
                        {
                            songs.map(song => {
                                return (
                                    <PlayListPageCard key={song.track.id} song={song} />

                                )
                            })
                        }

                    </ul>
                </div>
            </div>
        </section>
    )
}
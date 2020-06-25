import React from 'react';
import PlayListPageCard from './PlayListPageCard.js';

export default function PlayListPage(props) {
    const songs = props.playlist.data.items;
    console.log('props', props);
    console.log('songs', songs);

    //const track = props.song.track;

    // const artistsList = track.artists;
    // const artistsNames = []
    // for (let i = 0; i < artistsList.length; i++) {
    //     artistsNames.push(artistsList[i].name);
    // }
    // const artists = artistsNames.join();
    // const albumTitle = track.album.name;
    // const songTitle = track.name;
    // const songDuration = (0 + (track.duration_ms / 100000).toFixed(2).toString().replace('.', ':')).slice(-5);
    // const albumCover = track.album.images[2].url;
    // const albumCoverMedium = track.album.images[1].url;
    // const playUrl = track.preview_url;

    return (
        <section className='uk-section'>

            <div className='uk-container uk-margin-large-bottom'>
                <div className='uk-margin-large-bottom'>
                    {/* <img className='uk-margin-right' src={albumCover} width="200" height="200" alt='Album Cover' />
                    <span className='uk-inline'>
                        <h1 className='uk-block uk-text-primary uk-margin-remove'>{albumTitle}</h1>
                        <h3 className='uk-block uk-text-left'>{albumArtist}</h3>
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
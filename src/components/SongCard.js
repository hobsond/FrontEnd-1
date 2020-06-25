import React from 'react';

export default function SongCard(props) {
    const track = props.song.track;
    const artistsList = track.artists;
    const artistsNames = []
    for (let i = 0; i < artistsList.length; i++) {
        artistsNames.push(artistsList[i].name);
    }
    const artists = artistsNames.join();
    const albumTitle = track.album.name;
    const songTitle = track.name;
    const songDuration = (0 + (track.duration_ms / 100000).toFixed(2).toString().replace('.', ':')).slice(-5);
    const albumCover = track.album.images[2].url;
    const playUrl = track.preview_url

    console.log(playUrl)
    return (
        <li className='uk-margin-remove-top'>
            <div className='uk-padding-small uk-grid-medium uk-flex-middle' data-uk-grid>
                <div className='uk-width-auto'>
                    <div className='switching-icons'>
                        <i className='fal fa-music-alt'></i>
                        <a type='button' onClick=''>
                            <i className='fal fa-play-circle'></i>
                        </a>
                        <i className='fal fa-volume'></i>
                    </div>
                    <img className='uk-comment-avatar uk-border-circle' src={albumCover} width='50'
                        height='50' alt='' />
                </div>
                <div className='uk-width-expand'>
                    <h4 className='uk-comment-title uk-margin-remove'>
                        <a className='uk-link-reset' href='#'>
                            {songTitle}
                        </a>
                    </h4>
                    <small className=' uk-float-right'>{songDuration}</small>
                    <p className='uk-comment-meta uk-margin-remove-top'>
                        <i className='fal fa-user-music'></i>
                        <a className='uk-link-reset uk-margin-small-left' href='#'>{artists}</a>
                        <span className='uk-padding-small'>|</span>
                        <i className='fal fa-album'></i>
                        <a className='uk-link-reset uk-margin-small-left' href='#'>{albumTitle}</a>
                    </p>
                </div>
            </div>
        </li>
    )
}
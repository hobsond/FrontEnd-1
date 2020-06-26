import React from 'react';
import { useHistory } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { currentSongState, isPlayingState } from '../store/states'
import { toggleAudio, sleep, milliToMin } from '../utils/tools'

export default function SongCard(props) {
    const artistsNames = []
    for (let i = 0; i < props.song.artists.length; i++) {
        artistsNames.push(props.song.artists[i].name);
    }
    /*
    const track = props.song.track;
    const artistsList = track.artists;
    const artists = artistsNames.join();
    const albumTitle = track.album.name;
    const songTitle = track.name;
    const songDuration = (0 + (track.duration_ms / 100000).toFixed(2).toString().replace('.', ':')).slice(-5);
    const albumCover = track.album.images[2].url;
    const albumCoverMedium = track.album.images[1].url;
    const playUrl = track.preview_url
    */
    const [currentSong, setCurrentSong] = useRecoilState(currentSongState)
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState)
    console.log(props)

    async function playSong() {
        if (isPlaying === true) {
            toggleAudio(isPlaying, setIsPlaying);
            setSong();
            toggleAudio(isPlaying, setIsPlaying)
            //await sleep(500).then(() => { toggleAudio(isPlaying, setIsPlaying) });
        }
        else {
            setSong();
            await sleep(500).then(() => { toggleAudio(isPlaying, setIsPlaying) });
        }
    }

    function setSong() {
        setCurrentSong({
            id: props.song.id,
            artist: artistsNames,
            title: props.song.name,
            album: props.song.album.name,
            art: props.song.album.images[0].url,
            artMedium: props.song.album.images[1].url,
            audio: props.song.preview_url,
            duration: props.song.duration_ms,
            uri: props.song.uri,
            artistUrl: props.song.external_urls.spotify, //artist page
            titleUrl: props.song.external_urls.spotify, //song page
            albumUrl: props.song.external_urls.spotify, //album page
        });
        setTimeout(() => { console.log(`Now playing ${props.song.name} at ${props.song.preview_url}`); }, 300);
    }

    function exitModal() {
        let modal = document.getElementById("search");
        modal.parentNode.removeChild(modal);
        playSong();
        history.push('/playing')
    }

    console.log('track')
    /*console.log(track)*/
    let history = useHistory();
    return (
        <li className='uk-margin-remove-top song-track' >
            <div className='uk-padding-small uk-grid-medium uk-flex-middle' data-uk-grid>
                <div className='uk-width-auto'>
                    <div className='switching-icons uk-inline uk-margin-right'>
                        <i className='fal fa-music-alt'></i>
                        <a type='button' onClick={playSong} >
                            <i className='fal fa-play-circle'></i>
                        </a>
                        <i className='fal fa-volume'></i>
                    </div>
                    <img className='uk-comment-avatar' src={props.song.album.images[0].url} width='64'
                        height='64' alt='' />
                </div>
                <div className='uk-width-expand'>
                    <h4 className='uk-comment-title uk-margin-remove'>
                        <a className='uk-link-reset' onClick={e => { e.preventDefault(); exitModal() }}>
                            {props.song.name}
                        </a>
                    </h4>
                    <small className=' uk-float-right'>{milliToMin(props.song.duration_ms)}</small>
                    <p className='uk-comment-meta uk-margin-remove-top'>
                        <i className='fal fa-user-music'></i>
                        <a className='uk-link-reset uk-margin-small-left' onClick={e => { e.preventDefault(); exitModal() }}>{props.song.artists[0].name}</a>
                        <span className='uk-padding-small'>|</span>
                        <i className='fal fa-album'></i>
                        <a className='uk-link-reset uk-margin-small-left' onClick={e => { e.preventDefault(); exitModal() }}>{props.song.album.name}</a>
                    </p>
                </div>
            </div>
        </li>
    )
}
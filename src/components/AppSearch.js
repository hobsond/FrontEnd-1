import React, { useState, } from 'react';
import AlbumsCard from './AlbumsCard.js'
import TrackCard from './TrackCard.js'
import axios from 'axios';
import {useRecoilState} from 'recoil'
import {currentSongState, isPlayingState, queryState} from '../store/states'




export default function AppSearch() {
    const [query, setQuerey] = useRecoilState(queryState)
    const [songList, setSongList] = useState([])

    const onSearch = (e) => {
        e.preventDefault();
        let payload = {user_query:query};
        //axiosWithAuth()
        console.log(`Sending POST request. \nPAYLOAD: ${payload}`)
        axios
            .post( `https://bw3-ds.herokuapp.com/search`, payload)
            .then( (res) => {setSongList(res.data.tracks.items); console.log('123 ' + res.data.tracks.items) })
            .catch( (err) => console.log(err) )
    };
    
    return (
        <div id='search' className='uk-modal' data-uk-modal>
            <div className='uk-modal-dialog uk-flex uk-flex-center uk-flex-middle'>
                <button className='uk-modal-close-full' type='button' data-uk-close></button>
                <div className="uk-modal-body" data-uk-overflow-auto>
                    <form className='uk-search uk-search-large'>
                        <input 
                        className='uk-search-input uk-text-center' 
                        type='search' 
                        placeholder='Search...'
                        defaultValue={query}
                        onChange={e => setQuerey(e.target.value)} />
                        <button onClick={onSearch}>SEARCH</button>
                    </form>
                    <div>
                        {/* map over SongCard here */}
                        {/* <AlbumsCard /> */}
                        {console.log(songList)}
                        {(songList !== []) ?
                        <ul className='uk-list uk-list-divider'>
                        {   
                            songList.map(song => (
                            song.preview_url
                            ? < TrackCard key={song.id} song={song} />
                            : <div></div>
                             )
                        )}
                        </ul>
                            : <div></div>}

                    </div>
                </div>
            </div>
        </div>
    )
}
import React, {useEffect} from 'react';
import SongCard from './SongCard.js';
import axios from 'axios';

export default function Favorites(props) {
    //console.log(props);
    const songList = props.favorites.data.items;
    //console.log(songList);
    
    useEffect(() => {
        let userID = localStorage.userID
        console.log(localStorage.userID)
        console.log('hello')
        axios
            .get(`http://localhost:5000/api/user/4/like`)
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
    }, []);
    
   console.log('hello')
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
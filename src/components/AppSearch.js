import React from 'react';
import AlbumsCard from './AlbumsCard.js'
export default function AppSearch() {
    return (
        <div id='search' className='uk-modal' data-uk-modal>
            <div className='uk-modal-dialog uk-flex uk-flex-center uk-flex-middle'>
                <button className='uk-modal-close-full' type='button' data-uk-close></button>
                <div class="uk-modal-body" data-uk-overflow-auto>
                    <form className='uk-search uk-search-large'>
                        <input className='uk-search-input uk-text-center' type='search' placeholder='Search...' />
                    </form>
                    <div>
                        {/* map over SongCard here */}
                        <AlbumsCard />
                    </div>
                </div>
            </div>
        </div>
    )
}
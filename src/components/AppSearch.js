import React from 'react';

export default function AppSearch() {
    return (
        <div id='search' className='uk-modal-full uk-modal' data-uk-modal>
            <div className='uk-modal-dialog uk-flex uk-flex-center uk-flex-middle' data-uk-height-viewport>
                <button className='uk-modal-close-full' type='button' data-uk-close></button>
                <form className='uk-search uk-search-large'>
                    <input className='uk-search-input uk-text-center' type='search' placeholder='Search...' />
                </form>
            </div>
        </div>
    )
}
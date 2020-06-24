import React from 'react';

export default function AlbumsCard() {
    return (
        <div>
            <div className='uk-card uk-card-secondary'>
                <div className='uk-card-media-top'>
                    <img src='images/album-cover.jpg' alt='' />
                </div>
                <div className='uk-card-body uk-padding-small uk-text-center'>
                    <h3 className='uk-card-title'>Album Title</h3>
                    <p>Artist Name</p>
                </div>
            </div>
        </div>
    )
}
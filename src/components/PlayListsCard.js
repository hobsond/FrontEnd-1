import React from 'react';

export default function PlayListsCard() {
    return (
        <div>
            <div className='uk-card uk-card-secondary uk-card-body'>
                <div className='uk-card-media-top'>
                    <img src='images/album-cover.jpg' alt='' />
                </div>
                <div className='uk-card-body uk-padding-small uk-text-center uk-padding-remove-bottom'>
                    <a href='#' className='uk-card-title uk-margin-remove'>Playlist Title</a>
                    <div>
                        <small>Description</small>
                    </div>
                </div>
            </div>
        </div>
    )
}
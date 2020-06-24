import React from 'react';

export default function FavoritesCard() {
    return (
        <li className='uk-margin-remove-top'>
            <div className='uk-padding-small uk-grid-medium uk-flex-middle' data-uk-grid>
                <div className='uk-width-auto'>
                    <div className='switching-icons'>
                        <i className='fal fa-music-alt'></i>
                        <a href=''>
                            <i className='fal fa-play-circle'></i>
                        </a>
                        <i className='fal fa-volume'></i>
                    </div>
                    <img className='uk-comment-avatar uk-border-circle' src='images/album-cover.jpg' width='50'
                        height='50' alt='' />
                </div>
                <div className='uk-width-expand'>
                    <h4 className='uk-comment-title uk-margin-remove'><a className='uk-link-reset' href='#'>Song
                                    Title</a></h4><small className=' uk-float-right'>02:39</small>
                    <p className='uk-comment-meta uk-margin-remove-top'>
                        <i className='fal fa-user-music'></i>
                        <a className='uk-link-reset uk-margin-small-left' href='#'>Artist Name</a>
                        <span className='uk-padding-small'>|</span>
                        <i className='fal fa-album'></i>
                        <a className='uk-link-reset uk-margin-small-left' href='#'>Album Title</a>
                    </p>
                </div>
            </div>
        </li>
    )
}
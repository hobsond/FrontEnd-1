import React from 'react';
import { Link } from 'react-router-dom';

export default function AlbumsCard() {

    const albumID = 123456789;
    const albumLink = `/albumID${albumID}`;
    const artistID = 987654321;
    const artistLink = `/artistID${artistID}`;
    const albumCover = 'images/album-cover.jpg';
    const albumTitle = 'Album Title';
    const artistName = 'Artist Name';

    return (
        <div>
            <div className='uk-card uk-card-secondary'>
                <div className='uk-card-media-top'>
                    <img src={albumCover} alt='Album Cover' />
                </div>
                <div className='uk-card-body uk-padding-small uk-text-center'>
                    <h3 className='uk-h3 uk-card-title'>
                        <Link to={albumLink} className='uk-link-heading'>{albumTitle}</Link>
                    </h3>
                    <div>
                        <Link to={artistLink} className='uk-link-heading'>{artistName}</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
import React from 'react';
import { Link } from 'react-router-dom';

export default function PlayListsCard(props) {
    const playlistCover = props.playlist.images[0].url;
    const playlistTitle = props.playlist.name;
    const playlistDescription = props.playlist.description;
    const playlistBy = props.playlist.owner.display_name;
    const playlistId = props.playlist.id;
    const playlistLink = `/playlist/${playlistId}`
    return (
        <div>
            <div className='uk-card uk-card-secondary uk-card-body'>
                <div className='uk-card-media-top'>
                    <img src={playlistCover} alt='Playlist Cover' />
                </div>
                <div className='uk-card-body uk-padding-small uk-text-center uk-padding-remove-bottom'>
                    <Link to={playlistLink} className='uk-card-title uk-margin-remove'>{playlistTitle}</Link>

                    <div>
                        <small>{playlistDescription}</small>
                    </div>
                    <div>
                        <small className='uk-text-muted'>By {playlistBy}</small>
                    </div>
                </div>
            </div>
        </div>
    )
}
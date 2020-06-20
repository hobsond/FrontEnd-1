import React from 'react';
import PlayQueueCard from './PlayQueueCard';

export default function PlayQueue() {
    return (
        <div id='playQueue' className='play-queue' uk-offcanvas='flip: true; overlay: true'>
            <div className='uk-offcanvas-bar'>

                <button className='uk-offcanvas-close' type='button' data-uk-close></button>

                <h2>Play Queue</h2>
                <div className='now-playing uk-margin-bottom'>
                    <h4>Now Playing</h4>
                    <dl className='uk-description-list uk-description-list-divider'>
                        <dt>
                            {/* this link should take the user to the Song's page */}
                            <a href='#'>
                                <i className='fal fa-music-alt uk-margin-right uk-text-danger'></i>
                                Song Title
                            </a>
                        </dt>
                        <dd>
                            {/* this link should take the user to the Artist's page */}
                            <a href='#'>Artist</a>
                        </dd>
                    </dl>
                </div>

                <div className='next-up'>
                    <h4>Next Up</h4>
                    {/* map through play queue songs here and return PlayQueueCard */}
                    <PlayQueueCard />
                </div>
            </div>
        </div>
    )
}
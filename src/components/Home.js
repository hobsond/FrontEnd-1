import React from 'react';
import Popular from './Popular.js';
import Favorites from './Favorites.js';

export default function Home() {
    return (
        <section id='appHome' className='uk-section'>
            <div className='uk-container uk-margin-large-bottom'>
                <h1 className='uk-text-center uk-text-primary uk-margin-large-bottom'>
                    <i className='fad fa-waveform-path uk-margin-small-right' style={{ color: '#b1bbc1' }}></i>
                    <span className='uk-text-primary uk-text-uppercase'>Pulsified</span>
                </h1>
                <div className='uk-grid uk-grid-small' data-uk-grid='masonry: true'>
                    {/* <div className='uk-width-3-5@s uk-hidden'>
                        <div className='uk-card uk-card-secondary'>
                            <Popular />
                        </div>
                    </div>
                    <div className='uk-width-2-5@s uk-hidden'>
                        <div className='uk-card uk-card-secondary'>
                            <div className='uk-card-body uk-text-center'>
                                <h3 className='uk-card-title'>My Spotify</h3>
                                <a className='uk-button uk-button-default uk-width-1-1' href='#'>
                                    <i className='fab fa-spotify'></i>
                                    <span className='uk-margin-left'>Connect Now</span>
                                </a>
                            </div>
                        </div>
                    </div> */}
                    <div className='uk-width-3-5@s'>
                        <div className='uk-card uk-card-secondary'>
                            <div className='uk-card-body'>
                                <h3 className='uk-card-title'>Popular Songs</h3>
                            </div>
                        </div>
                    </div>
                    <div className='uk-width-2-5@s'>
                        <div className='uk-card uk-card-secondary'>
                            <div className='uk-card-body'>
                                <h3 className='uk-card-title'>Popular Artists</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
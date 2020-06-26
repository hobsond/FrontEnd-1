import React from 'react';
import { Link } from 'react-router-dom';
import AlbumsCard from './AlbumsCard.js';

export default function Albums() {
    return (
        <section id='albums' className='uk-section'>
            <div className='uk-container uk-margin-large-bottom'>
                <h1 className='uk-text-center uk-text-primary uk-margin-large-bottom'>Albums</h1>
                <div className='uk-child-width-1-2 uk-child-width-1-3@m uk-child-width-1-4@l' data-uk-grid>
                    {/* <AlbumsCard />
                    Map over albums and return the albums card */}
                    <div>
                        <div className='uk-card uk-card-secondary'>
                            <div className='uk-card-media-top'>
                                <img src='images/album-1.jpg' alt='Album Cover' />
                            </div>
                            <div className='uk-card-body uk-padding-small uk-text-center'>
                                <h3 className='uk-h3 uk-card-title'>
                                    <Link to={'/albums'} className='uk-link-heading'>En t'attendant</Link>
                                </h3>
                                <div>
                                    <Link to={'/albums'} className='uk-link-heading'>Mélanie Laurent</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='uk-card uk-card-secondary'>
                            <div className='uk-card-media-top'>
                                <img src='images/album-2.jpg' alt='Album Cover' />
                            </div>
                            <div className='uk-card-body uk-padding-small uk-text-center'>
                                <h3 className='uk-h3 uk-card-title'>
                                    <Link to={'/albums'} className='uk-link-heading'>Queen Of The Clouds</Link>
                                </h3>
                                <div>
                                    <Link to={'/albums'} className='uk-link-heading'>Tove Lo</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='uk-card uk-card-secondary'>
                            <div className='uk-card-media-top'>
                                <img src='images/album-3.jpg' alt='Album Cover' />
                            </div>
                            <div className='uk-card-body uk-padding-small uk-text-center'>
                                <h3 className='uk-h3 uk-card-title'>
                                    <Link to={'/albums'} className='uk-link-heading'>That's The Spirit</Link>
                                </h3>
                                <div>
                                    <Link to={'/albums'} className='uk-link-heading'>Bring Me The Horizon</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='uk-card uk-card-secondary'>
                            <div className='uk-card-media-top'>
                                <img src='images/album-4.jpg' alt='Album Cover' />
                            </div>
                            <div className='uk-card-body uk-padding-small uk-text-center'>
                                <h3 className='uk-h3 uk-card-title'>
                                    <Link to={'/albums'} className='uk-link-heading'>Motopony</Link>
                                </h3>
                                <div>
                                    <Link to={'/albums'} className='uk-link-heading'>Motopony</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='uk-card uk-card-secondary'>
                            <div className='uk-card-media-top'>
                                <img src='images/album-5.jpg' alt='Album Cover' />
                            </div>
                            <div className='uk-card-body uk-padding-small uk-text-center'>
                                <h3 className='uk-h3 uk-card-title'>
                                    <Link to={'/albums'} className='uk-link-heading'>hopeless fountain kingdom (Deluxe)</Link>
                                </h3>
                                <div>
                                    <Link to={'/albums'} className='uk-link-heading'>Halsey</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='uk-card uk-card-secondary'>
                            <div className='uk-card-media-top'>
                                <img src='images/album-6.jpg' alt='Album Cover' />
                            </div>
                            <div className='uk-card-body uk-padding-small uk-text-center'>
                                <h3 className='uk-h3 uk-card-title'>
                                    <Link to={'/albums'} className='uk-link-heading'>2</Link>
                                </h3>
                                <div>
                                    <Link to={'/albums'} className='uk-link-heading'>H.E.R.</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='uk-card uk-card-secondary'>
                            <div className='uk-card-media-top'>
                                <img src='images/album-7.jpg' alt='Album Cover' />
                            </div>
                            <div className='uk-card-body uk-padding-small uk-text-center'>
                                <h3 className='uk-h3 uk-card-title'>
                                    <Link to={'/albums'} className='uk-link-heading'>BADLANDS (Deluxe)</Link>
                                </h3>
                                <div>
                                    <Link to={'/albums'} className='uk-link-heading'>Halsey</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='uk-card uk-card-secondary'>
                            <div className='uk-card-media-top'>
                                <img src='images/album-8.jpg' alt='Album Cover' />
                            </div>
                            <div className='uk-card-body uk-padding-small uk-text-center'>
                                <h3 className='uk-h3 uk-card-title'>
                                    <Link to={'/albums'} className='uk-link-heading'>The 1975 (Deluxe Version)</Link>
                                </h3>
                                <div>
                                    <Link to={'/albums'} className='uk-link-heading'>The 1975</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
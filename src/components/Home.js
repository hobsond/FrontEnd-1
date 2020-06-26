import React from 'react';

export default function Home() {
    return (
        <section id='appHome' className='uk-section'>
            <div className='uk-container uk-margin-bottom'>
                <h1 className='uk-text-center uk-text-primary uk-margin-large-bottom'>
                    <i className='fad fa-waveform-path uk-margin-small-right' style={{ color: '#b1bbc1' }}></i>
                    <span className='uk-text-primary uk-text-uppercase'>Pulsified</span>
                </h1>
                <div className='uk-grid uk-grid-small' data-uk-grid='masonry: true'>
                    <div className='uk-width-5-5@s'>
                        <div className='uk-card uk-card-secondary'>
                            <div className='uk-card-body'>
                                <h3 className='uk-card-title'>Most Popular This Week</h3>
                                <ul data-uk-tab>
                                    <li className="uk-active"><a href='#'>Rock</a></li>
                                    <li><a href='#test'>Pop</a></li>
                                    <li><a href='#'>Dance</a></li>
                                    <li><a href='#'>Jazz</a></li>
                                    <li><a href='#'>Classic</a></li>
                                </ul>
                                <ul className='uk-switcher' data-uk-switcher>
                                    <li>
                                        <div className='uk-child-width-1-2 uk-child-width-1-5@m uk-text-center uk-grid-small' data-uk-grid>
                                            <div>
                                                <div className='uk-card uk-card-secondary uk-card-body uk-padding-remove'>
                                                    <div className='uk-card-media-top'>
                                                        <img src='images/album-cover.jpg' alt='Album Cover' />
                                                    </div>
                                                    <div className='uk-card-body uk-padding-small uk-text-center uk-padding-remove-bottom'>
                                                        <a href='#' className=' uk-margin-remove'>Song Title</a>
                                                        <div><small>Artist</small></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className='uk-card uk-card-secondary uk-card-body uk-padding-remove'>
                                                    <div className='uk-card-media-top'>
                                                        <img src='images/album-cover.jpg' alt='Album Cover' />
                                                    </div>
                                                    <div className='uk-card-body uk-padding-small uk-text-center uk-padding-remove-bottom'>
                                                        <a href='#' className=' uk-margin-remove'>Song Title</a>
                                                        <div><small>Artist</small></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className='uk-card uk-card-secondary uk-card-body uk-padding-remove'>
                                                    <div className='uk-card-media-top'>
                                                        <img src='images/album-cover.jpg' alt='Album Cover' />
                                                    </div>
                                                    <div className='uk-card-body uk-padding-small uk-text-center uk-padding-remove-bottom'>
                                                        <a href='#' className=' uk-margin-remove'>Song Title</a>
                                                        <div><small>Artist</small></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className='uk-card uk-card-secondary uk-card-body uk-padding-remove'>
                                                    <div className='uk-card-media-top'>
                                                        <img src='images/album-cover.jpg' alt='Album Cover' />
                                                    </div>
                                                    <div className='uk-card-body uk-padding-small uk-text-center uk-padding-remove-bottom'>
                                                        <a href='#' className=' uk-margin-remove'>Song Title</a>
                                                        <div><small>Artist</small></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className='uk-card uk-card-secondary uk-card-body uk-padding-remove'>
                                                    <div className='uk-card-media-top'>
                                                        <img src='images/album-cover.jpg' alt='Album Cover' />
                                                    </div>
                                                    <div className='uk-card-body uk-padding-small uk-text-center uk-padding-remove-bottom'>
                                                        <a href='#' className=' uk-margin-remove'>Song Title</a>
                                                        <div><small>Artist</small></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='uk-width-3-5@s'>
                        <div className='uk-card uk-card-secondary'>
                            <div className='uk-card-body'>
                                <h3 className='uk-card-title'>Popular Songs</h3>
                                <div>
                                    <ul className='uk-list uk-list-divider'>
                                        <li className='uk-margin-remove-top'>
                                            <div className='uk-padding-small uk-grid-medium' data-uk-grid>
                                                <span className='uk-width-auto'>
                                                    <img className='uk-comment-avatar' src='images/album-cover.jpg'
                                                        width='50' height='50' alt='Album Cover' />
                                                </span>
                                                <span className='uk-width-expand'>
                                                    <h4 className='uk-comment-title uk-margin-remove'>
                                                        <a className='uk-link-reset' href='#'>Song Title</a>
                                                    </h4>
                                                    <small className=' uk-float-right'>02:39</small>
                                                    <p className='uk-comment-meta uk-margin-remove-top'>
                                                        <i className='fal fa-user-music'></i>
                                                        <a className='uk-link-reset uk-margin-small-left' href='#'>Artist Name</a>
                                                        <span className='uk-padding-small'>|</span>
                                                        <i className='fal fa-album'></i>
                                                        <a className='uk-link-reset uk-margin-small-left' href='#'>Album Title</a>
                                                    </p>
                                                </span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='uk-width-2-5@s'>
                        <div className='uk-card uk-card-secondary'>
                            <div className='uk-card-body'>
                                <h3 className='uk-card-title'>Top Played</h3>
                                <ul className='uk-list'>
                                    <li className='uk-margin-remove-top'>
                                        <div className='uk-padding-small uk-grid-medium' data-uk-grid>
                                            <div className='uk-width-auto'>
                                                <img className='uk-comment-avatar' src='images/album-cover.jpg'
                                                    width='50' height='50' alt='Album Cover' />
                                            </div>
                                            <div className='uk-width-expand'>
                                                <h6 className=' uk-h6 uk-margin-remove'>
                                                    <a className='uk-link-reset' href='#'>Song Title</a>
                                                    <a className='suggest-button'>Suggest Similar</a>
                                                </h6>
                                                <div className='uk-comment-meta uk-margin-remove-top'>
                                                    <div>
                                                        <i className='fal fa-user-music'></i>
                                                        <a className='uk-link-reset uk-margin-small-left' href='#'>Artist Name</a>
                                                    </div>
                                                    <div>
                                                        <i className='fal fa-album'></i>
                                                        <a className='uk-link-reset uk-margin-small-left' href='#'>Album Title</a>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section >
    )
}
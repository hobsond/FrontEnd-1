import React from 'react';

export default function Home() {
    return (
        <section id='appHome' className='uk-section'>
            <div className='uk-container uk-margin-bottom'>
                <h1 className='uk-text-center uk-text-primary uk-margin-large-bottom'>
                    <i className='fad fa-waveform-path uk-margin-small-right' style={{ color: '#b1bbc1' }}></i>
                    <span className='uk-text-primary uk-text-uppercase'>Pulsified</span>
                </h1>
                <div className='uk-grid uk-grid-small' data-uk-grid>
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
                                                        <img src='images/rock-1.jpg' alt='Album Cover' />
                                                    </div>
                                                    <div className='uk-card-body uk-padding-small uk-text-center uk-padding-remove-bottom'>
                                                        <a href='#' className=' uk-margin-remove'>Parasite Eve</a>
                                                        <div><small>Bring Me The Horizon</small></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className='uk-card uk-card-secondary uk-card-body uk-padding-remove'>
                                                    <div className='uk-card-media-top'>
                                                        <img src='images/rock-2.jpg' alt='Album Cover' />
                                                    </div>
                                                    <div className='uk-card-body uk-padding-small uk-text-center uk-padding-remove-bottom'>
                                                        <a href='#' className=' uk-margin-remove'>Sickness</a>
                                                        <div><small>Grey Daze</small></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className='uk-card uk-card-secondary uk-card-body uk-padding-remove'>
                                                    <div className='uk-card-media-top'>
                                                        <img src='images/rock-3.jpg' alt='Album Cover' />
                                                    </div>
                                                    <div className='uk-card-body uk-padding-small uk-text-center uk-padding-remove-bottom'>
                                                        <a href='#' className=' uk-margin-remove'>Choose Life</a>
                                                        <div><small>POORSTACY, Travis Baker</small></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className='uk-card uk-card-secondary uk-card-body uk-padding-remove'>
                                                    <div className='uk-card-media-top'>
                                                        <img src='images/rock-4.jpg' alt='Album Cover' />
                                                    </div>
                                                    <div className='uk-card-body uk-padding-small uk-text-center uk-padding-remove-bottom'>
                                                        <a href='#' className=' uk-margin-remove'>Separate Ways</a>
                                                        <div><small>Neil Young</small></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className='uk-card uk-card-secondary uk-card-body uk-padding-remove'>
                                                    <div className='uk-card-media-top'>
                                                        <img src='images/rock-5.jpg' alt='Album Cover' />
                                                    </div>
                                                    <div className='uk-card-body uk-padding-small uk-text-center uk-padding-remove-bottom'>
                                                        <a href='#' className=' uk-margin-remove'>Lander</a>
                                                        <div><small>Sports Team</small></div>
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
                                                    <img className='uk-comment-avatar' src='images/popular-1.jpg'
                                                        width='50' height='50' alt='Album Cover' />
                                                </span>
                                                <span className='uk-width-expand'>
                                                    <h4 className='uk-comment-title uk-margin-remove'>
                                                        <a className='uk-link-reset' href='#'>Younger</a>
                                                    </h4>
                                                    <small className=' uk-float-right'>03:14</small>
                                                    <p className='uk-comment-meta uk-margin-remove-top'>
                                                        <i className='fal fa-user-music'></i>
                                                        <a className='uk-link-reset uk-margin-small-left' href='#'>Jonas Blue, HRVY</a>
                                                        <span className='uk-padding-small'>|</span>
                                                        <i className='fal fa-album'></i>
                                                        <a className='uk-link-reset uk-margin-small-left' href='#'>Younger</a>
                                                    </p>
                                                </span>
                                            </div>
                                        </li>
                                        <li className='uk-margin-remove-top'>
                                            <div className='uk-padding-small uk-grid-medium' data-uk-grid>
                                                <span className='uk-width-auto'>
                                                    <img className='uk-comment-avatar' src='images/popular-2.jpg'
                                                        width='50' height='50' alt='Album Cover' />
                                                </span>
                                                <span className='uk-width-expand'>
                                                    <h4 className='uk-comment-title uk-margin-remove'>
                                                        <a className='uk-link-reset' href='#'>Bruises</a>
                                                    </h4>
                                                    <small className=' uk-float-right'>03:40</small>
                                                    <p className='uk-comment-meta uk-margin-remove-top'>
                                                        <i className='fal fa-user-music'></i>
                                                        <a className='uk-link-reset uk-margin-small-left' href='#'>Lewis Capaldi</a>
                                                        <span className='uk-padding-small'>|</span>
                                                        <i className='fal fa-album'></i>
                                                        <a className='uk-link-reset uk-margin-small-left' href='#'>Before You Go</a>
                                                    </p>
                                                </span>
                                            </div>
                                        </li>
                                        <li className='uk-margin-remove-top'>
                                            <div className='uk-padding-small uk-grid-medium' data-uk-grid>
                                                <span className='uk-width-auto'>
                                                    <img className='uk-comment-avatar' src='images/popular-3.jpg'
                                                        width='50' height='50' alt='Album Cover' />
                                                </span>
                                                <span className='uk-width-expand'>
                                                    <h4 className='uk-comment-title uk-margin-remove'>
                                                        <a className='uk-link-reset' href='#'>Yummy</a>
                                                    </h4>
                                                    <small className=' uk-float-right'>03:30</small>
                                                    <p className='uk-comment-meta uk-margin-remove-top'>
                                                        <i className='fal fa-user-music'></i>
                                                        <a className='uk-link-reset uk-margin-small-left' href='#'>Justin Bieber</a>
                                                        <span className='uk-padding-small'>|</span>
                                                        <i className='fal fa-album'></i>
                                                        <a className='uk-link-reset uk-margin-small-left' href='#'>Yummy</a>
                                                    </p>
                                                </span>
                                            </div>
                                        </li>
                                        <li className='uk-margin-remove-top'>
                                            <div className='uk-padding-small uk-grid-medium' data-uk-grid>
                                                <span className='uk-width-auto'>
                                                    <img className='uk-comment-avatar' src='images/popular-4.jpg'
                                                        width='50' height='50' alt='Album Cover' />
                                                </span>
                                                <span className='uk-width-expand'>
                                                    <h4 className='uk-comment-title uk-margin-remove'>
                                                        <a className='uk-link-reset' href='#'>I Believe</a>
                                                    </h4>
                                                    <small className=' uk-float-right'>03:37</small>
                                                    <p className='uk-comment-meta uk-margin-remove-top'>
                                                        <i className='fal fa-user-music'></i>
                                                        <a className='uk-link-reset uk-margin-small-left' href='#'>Jonas Brothers</a>
                                                        <span className='uk-padding-small'>|</span>
                                                        <i className='fal fa-album'></i>
                                                        <a className='uk-link-reset uk-margin-small-left' href='#'>Happiness Begins</a>
                                                    </p>
                                                </span>
                                            </div>
                                        </li>
                                        <li className='uk-margin-remove-top'>
                                            <div className='uk-padding-small uk-grid-medium' data-uk-grid>
                                                <span className='uk-width-auto'>
                                                    <img className='uk-comment-avatar' src='images/popular-5.jpg'
                                                        width='50' height='50' alt='Album Cover' />
                                                </span>
                                                <span className='uk-width-expand'>
                                                    <h4 className='uk-comment-title uk-margin-remove'>
                                                        <a className='uk-link-reset' href='#'>Forever Yours (Avicii Tribute)</a>
                                                    </h4>
                                                    <small className=' uk-float-right'>03:13</small>
                                                    <p className='uk-comment-meta uk-margin-remove-top'>
                                                        <i className='fal fa-user-music'></i>
                                                        <a className='uk-link-reset uk-margin-small-left' href='#'>Kygo, Avicii, Sandro Cavazza</a>
                                                        <span className='uk-padding-small'>|</span>
                                                        <i className='fal fa-album'></i>
                                                        <a className='uk-link-reset uk-margin-small-left' href='#'>Forever Yours (Avicii Tribute)</a>
                                                    </p>
                                                </span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='uk-width-2-5@s uk-margin-top'>
                        <div className='uk-card uk-card-secondary'>
                            <div className='uk-card-body'>
                                <h3 className='uk-card-title'>Top Played</h3>
                                <ul className='uk-list uk-list-divider'>
                                    <li className='uk-margin-remove-top'>
                                        <div className='uk-padding-small uk-grid-medium' data-uk-grid>
                                            <div className='uk-width-auto'>
                                                <img className='uk-comment-avatar' src='images/top-played-1.jpg'
                                                    width='50' height='50' alt='Album Cover' />
                                            </div>
                                            <div className='uk-width-expand'>
                                                <h6 className=' uk-h6 uk-margin-remove'>
                                                    <a className='uk-link-reset' href='#'>Intentions(feat.Quavo)</a>
                                                    <a className='suggest-button'>Suggest Similar</a>
                                                </h6>
                                                <div className='uk-comment-meta uk-margin-remove-top'>
                                                    <div>
                                                        <i className='fal fa-user-music'></i>
                                                        <a className='uk-link-reset uk-margin-small-left' href='#'>Justin Bieber</a>
                                                    </div>
                                                    <div>
                                                        <i className='fal fa-album'></i>
                                                        <a className='uk-link-reset uk-margin-small-left' href='#'>Changes</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='uk-margin-remove-top'>
                                        <div className='uk-padding-small uk-grid-medium' data-uk-grid>
                                            <div className='uk-width-auto'>
                                                <img className='uk-comment-avatar' src='images/top-played-2.jpg'
                                                    width='50' height='50' alt='Album Cover' />
                                            </div>
                                            <div className='uk-width-expand'>
                                                <h6 className=' uk-h6 uk-margin-remove'>
                                                    <a className='uk-link-reset' href='#'>To Die For</a>
                                                    <a className='suggest-button'>Suggest Similar</a>
                                                </h6>
                                                <div className='uk-comment-meta uk-margin-remove-top'>
                                                    <div>
                                                        <i className='fal fa-user-music'></i>
                                                        <a className='uk-link-reset uk-margin-small-left' href='#'>Sam Smith</a>
                                                    </div>
                                                    <div>
                                                        <i className='fal fa-album'></i>
                                                        <a className='uk-link-reset uk-margin-small-left' href='#'>To Die For</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='uk-margin-remove-top'>
                                        <div className='uk-padding-small uk-grid-medium' data-uk-grid>
                                            <div className='uk-width-auto'>
                                                <img className='uk-comment-avatar' src='images/top-played-3.jpg'
                                                    width='50' height='50' alt='Album Cover' />
                                            </div>
                                            <div className='uk-width-expand'>
                                                <h6 className=' uk-h6 uk-margin-remove'>
                                                    <a className='uk-link-reset' href='#'>Mistakes</a>
                                                    <a className='suggest-button'>Suggest Similar</a>
                                                </h6>
                                                <div className='uk-comment-meta uk-margin-remove-top'>
                                                    <div>
                                                        <i className='fal fa-user-music'></i>
                                                        <a className='uk-link-reset uk-margin-small-left' href='#'>Jonas Blue, Paloma</a>
                                                    </div>
                                                    <div>
                                                        <i className='fal fa-album'></i>
                                                        <a className='uk-link-reset uk-margin-small-left' href='#'>Mistakes</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='uk-margin-remove-top'>
                                        <div className='uk-padding-small uk-grid-medium' data-uk-grid>
                                            <div className='uk-width-auto'>
                                                <img className='uk-comment-avatar' src='images/top-played-4.jpg'
                                                    width='50' height='50' alt='Album Cover' />
                                            </div>
                                            <div className='uk-width-expand'>
                                                <h6 className=' uk-h6 uk-margin-remove'>
                                                    <a className='uk-link-reset' href='#'>Bad Child</a>
                                                    <a className='suggest-button'>Suggest Similar</a>
                                                </h6>
                                                <div className='uk-comment-meta uk-margin-remove-top'>
                                                    <div>
                                                        <i className='fal fa-user-music'></i>
                                                        <a className='uk-link-reset uk-margin-small-left' href='#'>Tone And I</a>
                                                    </div>
                                                    <div>
                                                        <i className='fal fa-album'></i>
                                                        <a className='uk-link-reset uk-margin-small-left' href='#'>Bad Child/Can't Be Happy All The Time</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='uk-margin-remove-top uk-margin-remove-bottom'>
                                        <div className='uk-padding-small uk-grid-medium' data-uk-grid>
                                            <div className='uk-width-auto'>
                                                <img className='uk-comment-avatar' src='images/top-played-5.jpg'
                                                    width='50' height='50' alt='Album Cover' />
                                            </div>
                                            <div className='uk-width-expand'>
                                                <h6 className=' uk-h6 uk-margin-remove'>
                                                    <a className='uk-link-reset' href='#'>Know Your Worth</a>
                                                    <a className='suggest-button'>Suggest Similar</a>
                                                </h6>
                                                <div className='uk-comment-meta uk-margin-remove-top'>
                                                    <div>
                                                        <i className='fal fa-user-music'></i>
                                                        <a className='uk-link-reset uk-margin-small-left' href='#'>Khalid, Disclosure</a>
                                                    </div>
                                                    <div>
                                                        <i className='fal fa-album'></i>
                                                        <a className='uk-link-reset uk-margin-small-left' href='#'>Know Your Worth</a>
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
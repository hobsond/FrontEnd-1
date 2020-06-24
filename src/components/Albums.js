import React from 'react';
import AlbumsCard from './AlbumsCard.js';

export default function Albums() {
    return (
        <section id='albums' className='uk-section'>
            <div className='uk-container uk-margin-large-bottom'>
                <h1 className='uk-text-center uk-text-primary uk-margin-large-bottom'>Albums</h1>
                <div className='uk-child-width-1-2 uk-child-width-1-3@m uk-child-width-1-4@l' data-uk-grid>
                    <AlbumsCard />
                    {/* Map over albums and return the albums card */}
                </div>
            </div>
        </section>
    )
}
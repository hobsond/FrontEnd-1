import React from 'react';
import FavoritesCard from './FavoritesCard.js';
export default function Favorites() {

    return (
        <section id='favorites' className='uk-section'>
            <div className='uk-container uk-margin-large-bottom'>
                <h1 className='uk-text-center uk-text-primary uk-margin-large-bottom'>Favorites</h1>
                <div>
                    <ul className='uk-list uk-list-divider'>
                        <FavoritesCard />
                        {/* Map over favorites and return the FavoritesCard for each */}
                    </ul>
                </div>
            </div>
        </section>
    )
}
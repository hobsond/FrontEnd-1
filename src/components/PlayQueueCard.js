import React from 'react';

export default function PlayQueueCard() {
    return (
        <dl className='uk-description-list uk-description-list-divider'>
            <dt className='uk-grid-small uk-grid' >
                <div className='uk-width-expand' uk-leader='fill: .'>
                    <a href='#'>Song Title</a>
                </div>
                <div>02:35</div>
            </dt>
            <dd><a href='#'>Artist</a></dd>
        </dl>
    )
}
// ToDo: have a ... menu on the right of each song
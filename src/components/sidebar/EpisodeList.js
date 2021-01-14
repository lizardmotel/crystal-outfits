import React from 'react';

import Episode from './Episode';

function EpisodeList({value}) {

    const {episodes} = value;
    return (
        <div>
            {episodes.map(ep => {
                return <Episode key={ep.id} ep={ep} value={value} />
            })}
        </div>
    )
}

export default EpisodeList;
import React from 'react';
import Outfit from './Outfit';

function OutfitList({outfits}) {

    const outfitWithImg = outfits.map(item => {
        return <Outfit key={item.id} outfitData={item} />
    })
    return (
        <React.Fragment>
            <div className='py-5'>
                <div className='container'>
                    <div className='row'>
                        {outfitWithImg}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default OutfitList;


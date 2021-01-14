import React from 'react';

import { Link } from 'react-router-dom';

function Episode({ep, value}) {

    const { id, title } = ep;
    
    const { handleInfo } = value;

    return  (
            <div className='b-item'>
                <Link onClick={() => {
                handleInfo(id)
                }}
                className='b-item-text'to='/info'>
                    <div>
                        <span>Episode {id}</span>
                    </div>
                    <div>
                        <span>{title}</span>
                    </div>
                </Link>
            </div>

        
    )
}

export default Episode;
import React, { Component } from 'react';
import { OutfitConsumer } from '../../context';

import OutfitList from './OutfitList';
import EmptyInfo from './EmptyInfo';
import Squares from './Squares';

class Info extends Component {

    render() {
        return (
            <OutfitConsumer>
            {(value) => {
                const {id, title, synopsis} = value.info;

                const { infoOutfits } = value;

                if (infoOutfits.length > 0) {
                    return (
                        <div className='container text-center pt-5'>
                            <div className='row pt-5 justify-content-center'>
                                <h1><span style={{fontSize:'2.4rem'}}>Episode {id}:</span> {title}</h1>
                            </div>

                            <div className='row py-3 justify-content-center'>
                                <p style={{fontSize: '1.3rem'}}>{synopsis}</p>
                            </div>

                            <OutfitList outfits={infoOutfits} />
                            <Squares value={value} />
                        </div>
                    )
                }

                if (infoOutfits.length === 0) {
                    return (
                        <div>
                            <EmptyInfo />
                            <Squares />
                        </div>
                    )
                }
            }}
            </OutfitConsumer>
        )
    }
}


export default Info;
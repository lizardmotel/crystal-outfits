import React from 'react';
import { OutfitConsumer } from '../context';

class Cover extends React.Component {

    render() {
        return (

            <OutfitConsumer>
                {(value) => {
                    const { toggleMenu, showMenu } = value;

                    return (
                        <div>
                            {showMenu ? 
                                (
                                    <div style={overlayCss}
                                    onClick={() => toggleMenu()}
                                    />
                                )
                                :
                                (
                                    null
                                )
                            }
                        </div>
                    )
                }}

            </OutfitConsumer>
        )
    }
}

const overlayCss = {
    position: 'fixed',
    zIndex: '1000',
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.3)',
    opacity: '1',
    transition: 'opacity 0.3s ease 0s'
}


export default Cover;
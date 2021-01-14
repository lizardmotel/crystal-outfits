import React from 'react';
import { OutfitConsumer } from '../context';
import { NavBurger } from './Buttons';

class MenuButton extends React.Component {

    render() {
        return (
            <OutfitConsumer>
                {(value) => {
                    const { toggleMenu } = value;

                    return (
                        <NavBurger className='burger-button'
                        onClick={() => toggleMenu()}>
                            <i className="fas fa-bars"></i>
                        </NavBurger>
                    )
                }}
            </OutfitConsumer>
        )
    }
}




export default MenuButton;
import React from 'react';
import { OutfitConsumer } from '../../context';
import styled from 'styled-components';
import EpisodeList from './EpisodeList';
import { BurgerCrossButton } from '../Buttons';


class PopoutMenu extends React.Component {

    render() {
        return (
            <section>
                <OutfitConsumer>
                    {(value) => {
                        
                        const { showMenu, toggleMenu } = value;

                        return (
                            <BurgerWrap className={showMenu ? 'active' : ''}>
                                <div className='b-menu'>
                                    <nav className='item-list'>
                                        <EpisodeList value={value} />
                                    </nav>
                                </div>

                                <div 
                                style={{position: 'absolute', width: '30px', height: '30px', right: '8px', top: '8px'}}>
                                    <BurgerCrossButton onClick={() => {
                                        toggleMenu()
                                    }}>
                                        <i className='fas fa-times'></i>
                                    </BurgerCrossButton>
                                </div>
                            </BurgerWrap>
                        )
                    }}
                </OutfitConsumer>
            </section>
        )
    }
}

const BurgerWrap = styled.div`
    position: fixed;
    left: -100%;
    z-index: 1100;
    width: 275px;
    height: 100%;
    transition: all 0.2s ease;


    .b-menu {
        box-sizing: border-box;
        height: 100%;
        overflow: auto;
        padding: 1.5em 1em 0;
        background: var(--darkPurple);
        font-size: 1.05em;
        line-height: 1.2;
        -webkit-box-shadow: 2px 0px 3px 0px rgba(0,0,0,0.51);
        -moz-box-shadow: 2px 0px 3px 0px rgba(0,0,0,0.51);
        box-shadow: 2px 0px 3px 0px rgba(0,0,0,0.51);
    }

    .item-list {
        height: 100%;
    }
    .b-item {
        width: 100%;
        padding: 0.8em;
    }

    .b-item-text {
        color: var(--mainWhite);
    }
    .b-item-text:hover {
        color: var(--mainRed);
    }
    .b-item-text:focus {
        outline: none;
    }
`

export default PopoutMenu;
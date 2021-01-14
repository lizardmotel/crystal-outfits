import React from 'react';
import { Link } from 'react-router-dom';

import {OutfitConsumer} from '../../context';
import styled from 'styled-components';

class Squares extends React.Component {

    render() {
        return (
            <SquaresContainer className='container pb-5 pt-2 d-flex justify-content-center' >
                <OutfitConsumer>
                {(value) => {

                    const { handleInfo, getNextEp } = value;

                    return (
                        <div className='sq-container'>

                            <a href='#top' 
                            onClick={() => handleInfo(getNextEp(-1))}>

                                <div className='square sq1'>
                                    <h6 className='sq-text text-center'>
                                        <i className='fas fa-arrow-left' />
                                    </h6>
                                </div>
                            </a>

                            <Link to='/'>
                                <div className='square sq2'>
                                    <h6 className='sq-text text-center'>
                                        <i className='fas fa-home' />
                                    </h6>
                                </div>
                            </Link>

                            <a href='#top'
                            onClick={() => handleInfo(getNextEp(1))}>

                                <div className='square sq3'>
                                    <h6 className='sq-text text-center'>
                                        <i className='fas fa-arrow-right' />
                                    </h6>
                                </div>
                            </a>

                        </div>
                    )
                }}
                
                </OutfitConsumer>

                </SquaresContainer>
        )
    }
}

const SquaresContainer = styled.div`
    &:focus {
        a {
            outline: none;
        }
    }
    .sq-container {
        min-width: 500px;
        position: relative;
        height: 300px;
    }
    .square {
        position: absolute;
        width: 100px;
        height: 100px;
        background-color: var(--darkPurple);
        margin: 10px;
        transform: rotate(45deg);
    }
    .sq1 {
        margin-left: -50px;
        left: 35%;
        top: 25%;
    }
    .sq2 {
        margin-left: -50px;
        left: 50%;
        top: 50%;
    }
    .sq3 {
        margin-left: -50px;
        left: 65%;
        top: 25%;
    }
    .sq-text {
        font-size: 1.2rem;
        transform: rotate(-45deg);
        color: var(--mainWhite);
        margin: 40px 25px;
    }
    @media screen and (max-width: 500px) {
        .sq-container {
            display: none;
        }
    }
`

export default Squares;
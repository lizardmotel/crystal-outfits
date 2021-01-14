import React from 'react';
import styled from 'styled-components';

import Slider from './Slider';

function Outfit({outfitData}) {
    
    const { img, hairstyle, clothing } = outfitData;
    

    return (
        <OutfitWrapper className='col-12 mx-auto my-3'>
            <div className='card'>
                <div className='carousel-container h-auto p-3'>
                    <Slider images={img} />
                </div>
            </div>

            <div className='card-footer d-flex justify-content-between'>
                <div className='info-sec' style={{marginRight: '5px'}} >
                    <h5>Hairstyle:</h5>
                    <p>{hairstyle}</p>
                </div>
                <div className='info-sec' style={{marginLeft: '5px'}} >
                    <h5>Clothing:</h5>
                    <p>{clothing}</p>
                </div>
            </div>
        </OutfitWrapper>
    )
}

const OutfitWrapper = styled.div`
    .img-style {
        height: auto;
        width: 100%;
        max-width: 853px;
    }
    .owl-item {
        display: flex;
        justify-content: center;
    }
    .owl-dot:focus {
        outline: none;
    }

    .card, .card-footer {
        transition: all 1s linear;
    }
    .card {
        border: 0.04rem solid transparent;
        border-radius: 5px 5px 0 0;
        border-bottom: none;
    }
    .card-footer {
        background: rgba(160, 123, 197, 0.3);
        border: 0.04rem solid transparent;
        border-radius: 0 0 5px 5px;
        border-top: none
    }
    &:hover {
        .card {
            border: 0.04rem solid rgba(57, 37, 77, 0.3);
            border-bottom: none;
        }
        .card-footer {
            background: rgba(160, 123, 197, 0.7);
            border: 0.04rem solid rgba(57, 37, 77, 0.3);
            border-top: none;
        }
    }
    .info-sec {
        flex-grow: 1;
        flex-basis: 0;
    }
    @media screen and (max-width: 400px) {
        .card-footer {
            display: none !important;
        }
        .card {
            transition: all 1s linear;
            border-radius: 5px 5px 5px 5px;
            border-bottom: 0.04rem solid transparent;
        }
        &:hover {
            .card {
                border-bottom: 0.04rem solid rgba(57, 37, 77, 0.3);
            }
        }
    }

`
export default Outfit;
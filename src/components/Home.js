import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Title from './Title';
import crystalcover from '../crystalcover.jpg';
import { OutfitConsumer } from '../context';
import { HomeButton } from './Buttons';

class Home extends Component {

    render() {
        return (
            <OutfitConsumer>
            {(value) => {
                const { handleInfo, randomEpisode } = value; 
                return (
                <div className='py-5 px-5'>
                    <div className='container'>
                        <Title name='Crystal Braywood' title='Hiccups'/>
                        <div className='row py-3'>
                            <img style={{width: '100%'}}src={crystalcover} alt='homepage'/>
                        </div>
                        <div className='row py-2'>
                            <p className='text-center'><strong>Crystal Braywood</strong>, played by <strong>Emily Perkins</strong> is the daughter of a rich banker and receptionist at Haddison House Publishing where she works apathetically and as little as possible. Her boss Joyce tends to keep her down through the strict 9 to 5 work week. On top of her attitude, she tends expresses herself through her clothing and hairstyles as much as she possibly can, regularly changing outfits throughout the show.</p>
                        </div>
                        <div className='row text-center justify-content-center'>
                            
                            <Link to='/info'>
                                <HomeButton onClick={() => {
                                    handleInfo(randomEpisode())
                                }}>
                                    random episode
                                </HomeButton>
                            </Link>
                            
                        </div>
                    </div>
                </div>
                )
            }}
            </OutfitConsumer>
                
        )
    }
}

export default Home;
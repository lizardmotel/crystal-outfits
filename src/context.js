import React, { Component } from 'react';
import {outfitArray, episodeList, info} from './data'

const OutfitContext = React.createContext();
//Provider
//Consumer

class OutfitProvider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            outfits: [],
            episodes: [],
            info,
            infoOutfits: [],
            showMenu: false
        }
        this.setOutfits = this.setOutfits.bind(this);
        this.setEpisodes = this.setEpisodes.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
    }


    componentDidMount() {
        this.setOutfits();
        this.setEpisodes();
    }

    setOutfits = () => {
        let temp = [];
        outfitArray.forEach(item => {
            const singleOutfit = {...item};
            temp = [...temp, singleOutfit];
        })
        this.setState(state => {
            state.outfits = temp
            return {outfits: state.outfits}
        })
    }

    setEpisodes = () => {
        let temp = [];
        episodeList.forEach(item => {
            const singleEp = {...item};
            temp = [...temp, singleEp];
        })
        this.setState(state => {
            state.episodes = temp;
            return {episodes: state.episodes}
        })
    }

    getItem = (id) => {
        const episode = this.state.episodes.find((item) => item.id === id)
        return episode;
    }

    handleInfo = (id) => {
        const epInfo = this.getItem(id);
        const relatedEps = this.matchOutfits(epInfo)

        this.setState(() => {
            return {
                info: epInfo,
                infoOutfits: relatedEps
            }
        })
    }

    randomEpisode = () => {
        const totalEp = this.state.episodes.length;
        const randomEp = Math.floor(Math.random() * totalEp) + 1;
        return randomEp;
    }

    matchOutfits = (episodeId) => {
        let tempMatch = [];
        this.state.outfits.forEach(item => { //for each outfit

            item.episodes.forEach(ep => { //if outfit is in given ep (id)
                if (ep === episodeId.id) {
                    tempMatch = [...tempMatch, item]
                }
            })
        })
        return tempMatch;
    }

    toggleMenu = () => {
        this.setState((prevState) => {
            prevState.showMenu = !prevState.showMenu;
            return {showMenu: prevState.showMenu}
        })
    }

    getNextEp = (num) => {
        if (this.state.info.id < 2 && num === -1) {
            const nextEp = 13;
            return nextEp;
        }

        if (this.state.info.id === 13 && num === 1) {
            const nextEp = 1;
            return nextEp;
        }

        const nextEp = this.state.info.id + num;
        return nextEp;
    }
    render() {
        return (
            <OutfitContext.Provider value={{
                ...this.state,
                randomEpisode: this.randomEpisode,
                handleInfo: this.handleInfo,
                toggleMenu: this.toggleMenu,
                getNextEp: this.getNextEp,
            }}>
                {this.props.children}
            </OutfitContext.Provider>
        )
    }
}

const OutfitConsumer = OutfitContext.Consumer;

export { OutfitProvider, OutfitConsumer } ;
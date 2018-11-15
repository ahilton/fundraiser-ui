import React, {Component} from 'react';

import {connect} from 'react-redux'

import 'normalize.css/normalize.css'
import '@blueprintjs/core/dist/blueprint.css'
import './App.css';

import {getDisplayMode, getFireworksText, getShowDonationData} from './redux/funding'
import ThanksSlide from "./container/ThanksSlide";
import FireworksSlide from "./container/FireworksSlide";
import TickerSlide from "./container/TickerSlide";
import InstaSlide from "./container/InstaSlide";
import DonationSlide from "./container/DonationSlide";
import AuctionSlide from "./container/AuctionSlide";
import StaticSlide from "./container/StaticSlide";
import AvaPictureSlide from "./container/AvaPictureSlide";
import FactsSlide from "./container/FactsSlide";
import SponsorsSlide from "./container/SponsorsSlide";
import FriendsSponsorSlide from "./container/FriendsSponsorSlide";
import InstaIntroSlide from "./container/InstaIntroSlide";

class AppNew extends Component {


    render() {
        const {displayMode, fireworksText} = this.props

        var comp
        switch (displayMode ? displayMode : '') {
            case 'TICKER_1':
            case 'TICKER_2':
                comp = <TickerSlide showNight={true}/>
                break;
            case 'FIREWORKS':
                comp = <FireworksSlide message={fireworksText}/>
                break;
            case 'INSTAINTRO':
                comp = <InstaIntroSlide/>
                break;
            case 'INSTA':
                comp = <InstaSlide/>
                break;
            case 'DONATION':
                comp = <DonationSlide/>
                break;
            case 'AVA':
                comp = <AvaPictureSlide/>
                break;
            // case 'AVA':
            //     comp = <ThanksSlide {...{}}/>
            //     break;
            case 'KERRY':
            case 'MBB':
            case 'AUCTION':
                comp = <AuctionSlide/>
                break;
            case 'FACTS':
                comp = <FactsSlide/>
                break;
            case 'FRIENDS':
                comp = <FriendsSponsorSlide/>
                break;
            case 'SPONSORS':
                comp = <SponsorsSlide/>
                break;
            default:
                comp = <StaticSlide/>
                break;

        }

        return (

            <div id='mainContent' style={{
                display: 'flex',
                flexDirection: 'row',
                height: '100%',
            }}>
                {comp}
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        // showDonationData: getShowDonationData(state),
        displayMode: getDisplayMode(state),
        fireworksText: getFireworksText(state)
    }
}

export default connect(mapStateToProps)(AppNew);

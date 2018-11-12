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

class AppNew extends Component {


    render() {
        const {displayMode, fireworksText} = this.props

        var comp
        switch (displayMode ? displayMode : '') {
            case 'TICKER_1':
                comp = <TickerSlide showNight={true}/>
                break;
            case 'TICKER_2':
                comp = <TickerSlide/>
                break;
            case 'FIREWORKS':
                comp = <FireworksSlide message={fireworksText}/>
                break;
            case 'INSTA':
                comp = <InstaSlide/>
                break;
            case 'DONATION':
                comp = <DonationSlide/>
                break;
            case 'AVA':
                comp = <ThanksSlide {...{}}/>
                break;
            case 'AUCTION':
                comp = <AuctionSlide/>
                break;
            default:
                comp = <TickerSlide/>
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

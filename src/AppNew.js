import React, {Component} from 'react';

import {connect} from 'react-redux'

import 'normalize.css/normalize.css'
import '@blueprintjs/core/dist/blueprint.css'
import './App.css';

import {getDisplayMode, getShowDonationData} from './redux/funding'
import DonationSlide from "./container/DonationSlide";
import TakingsSlide from "./container/TakingsSlide";
import ThanksSlide from "./container/ThanksSlide";
import FireworksSlide from "./container/FireworksSlide";
import TickerSlide from "./container/TickerSlide";

class AppNew extends Component {


    render() {
        const {
            showDonationData,
            displayMode,
        } = this.props

        var showDonation = (showDonationData && displayMode && displayMode === 'donation')
        var showTakings = (displayMode && displayMode === 'takings')
        var showThanks = (displayMode && displayMode === 'thanks')
        var showFireworks = (displayMode && displayMode === 'fireworks')
        var showTicker = !showDonation && !showTakings && !showThanks

        return (

            <div id='mainContent' style={{
                display: 'flex',
                flexDirection: 'row',
                height: '100%',
            }}>
                {showTicker && <TickerSlide/>}
                {showTakings && <TakingsSlide {...{
                    takings:10000
                }}/>}
                {showFireworks && <FireworksSlide/>}
                {showDonation && <DonationSlide {...{
                    showDonationData: showDonationData
                }}/>}
                {showThanks && <ThanksSlide {...{}}/>}
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        showDonationData: getShowDonationData(state),
        displayMode: getDisplayMode(state)
    }
}

export default connect(mapStateToProps)(AppNew);

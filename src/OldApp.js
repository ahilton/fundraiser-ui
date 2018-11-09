import React, {Component} from 'react';

import {connect} from 'react-redux'

import 'normalize.css/normalize.css'
import '@blueprintjs/core/dist/blueprint.css'
import './App.css';

import {
    getDisplayMode, getDonationCurrentTotal, getDonationStartTotal, getFundraiserTarget, getFundraiserTotal,
    getShowDonationData
} from './redux/funding'

import Footer from "./components/Footer";

import Balloon from "./components/Balloon";
import Ticker from "./components/Ticker";
import Donation from "./container/DonationSlide";
import Takings from "./container/TakingsSlide";
import Thanks from "./container/ThanksSlide";
import FireworksContainer from "./container/FireworksSlide";

var skyline = require('./img/skyline.png')

class App extends Component {

    pageGrowStyle = {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        flex: 1
    }

    render() {
        const {
            // donationStartTotal,
            // donationCurrentTotal,
            // showDonationData,
            // fundraiserTarget,
            displayMode,
            // fundraiserTotal
        } = this.props

        // var donationTotal = donationCurrentTotal - donationStartTotal
        // var total = donationTotal + fundraiserTotal
        //
        // var safeFundraiserTarget = (fundraiserTarget && fundraiserTarget>1)?fundraiserTarget:10000
        //
        // var fundraiserPct = (total >= fundraiserTarget) ? 100 : Math.round((total / safeFundraiserTarget)* 100)

        var showDonation = (showDonationData && displayMode && displayMode === 'donation')
        var showTakings = (displayMode && displayMode === 'takings')
        var showThanks = (displayMode && displayMode === 'thanks')
        var showFireworks = (displayMode && displayMode === 'fireworks')
        // console.log(showDonationData)





        return (

            <div id='mainContent' style={{
                display: 'flex',
                flexDirection: 'row',
                height: '100%',
            }}>

                {/*{!showDonation && !showTakings && !showThanks && !showFireworks && <Balloon style={{*/}
                    {/*position:'absolute',*/}
                    {/*top:250,*/}
                    {/*left:60,*/}
                    {/*// opacity: 0.8*/}
                {/*}}/>}*/}

                {showFireworks && <FireworksContainer/>}

                {!showFireworks && <div style={{
                    display: 'flex',
                    flex: 1,
                    alignItems: 'center', // vertical
                    justifyContent: 'center', //horizontal
                    flexDirection: 'column',
                    marginTop:200
                }}>
                    {!showDonation && !showTakings && !showThanks && <Ticker {...{
                        fundraiserTotal:total,
                        fundraiserTarget:fundraiserTarget,
                        fundraiserPct:fundraiserPct
                    }}/>}
                    {showDonation && <Donation {...{
                        showDonationData:showDonationData
                    }}/>}
                    {showTakings && <Takings {...{
                        takings:fundraiserTotal
                    }}/>}
                    {showThanks && <Thanks {...{
                    }}/>}
                    <Footer {...{
                        lastSystemMessage:""
                    }}>
                        <div><b>avas</b>journey.com.au</div>
                    </Footer>
                    <div style={{
                        width:'100%',
                        position:'fixed', left:0, bottom:0,
                        display:'flex',
                        alignItems:'center', // vertical
                        justifyContent: 'center', //horizontal
                        textAlign:'center',
                        paddingBottom: 10,
                        zIndex: -10
                    }}>
                        <div style={{
                            maxWidth:1000
                        }}>
                            <img src={skyline} style={{width:'100%'}}/>
                        </div>
                    </div>
                </div>}

            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        // donationStartTotal: getDonationStartTotal(state),
        // donationCurrentTotal: getDonationCurrentTotal(state),
        showDonationData: getShowDonationData(state),
        // fundraiserTarget:getFundraiserTarget(state),
        // fundraiserTotal:getFundraiserTotal(state),
        displayMode:getDisplayMode(state)
    }
}

export default connect(mapStateToProps)(App);

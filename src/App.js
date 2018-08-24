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
import Donation from "./components/Donation";
import Takings from "./components/Takings";
import Thanks from "./components/Thanks";
import FireworksContainer from "./components/FireworksContainer";

class App extends Component {

    pageGrowStyle = {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        flex: 1
    }

    render() {
        const {
            donationStartTotal,
            donationCurrentTotal,
            showDonationData,
            fundraiserTarget,
            displayMode,
            fundraiserTotal
        } = this.props

        var donationTotal = donationCurrentTotal - donationStartTotal
        var total = donationTotal + fundraiserTotal

        var safeFundraiserTarget = (fundraiserTarget && fundraiserTarget>1)?fundraiserTarget:10000

        var fundraiserPct = (total >= fundraiserTarget) ? 100 : Math.round((total / safeFundraiserTarget)* 100)
        var showDonation = (showDonationData && displayMode && displayMode === 'donation')
        var showTakings = (displayMode && displayMode === 'takings')
        var showThanks = (displayMode && displayMode === 'thanks')
        var showFireworks = (displayMode && displayMode === 'fireworks')
        // console.log(showDonationData)

        return (

            <div style={{
                display: 'flex',
                fontFamily: 'Helvetica-light, Helvetica',
                flexDirection: 'row',
                height: '100%',
                backgroundColor: '#F4C0AF', //lr F4C0AF //lg B6E8E3 //lb BAE9FF //ly F9F0BB
                //b 97DEFF //g 8DD1CA //r E99F86 //y F3E598
                //db 30BDFF //dg 41BAAE //dr DE5021 //dy EDD23B
                //vb 207EA9 //vg 2B7C74 //vr 943616 //vy 9E8C28
            }}>

                {!showDonation && !showTakings && !showThanks && !showFireworks && <Balloon style={{
                    position:'absolute',
                    top:50,
                    left:60,
                    opacity: 0.8
                }}/>}

                {showFireworks && <FireworksContainer/>}

                {!showFireworks && <div style={{
                    display: 'flex',
                    flex: 1,
                    alignItems: 'center', // vertical
                    justifyContent: 'center', //horizontal
                    flexDirection: 'column'
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
                        <div style={{
                            color:'white',
                            //fontFamily:'Verdana',
                            fontSize:60,
                            fontVariant:'small-caps',
                            letterSpacing:'5px',
                            //fontWeight:'100'
                        }}><b>avas</b>journey.com.au</div>
                    </Footer>
                </div>}

            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        donationStartTotal: getDonationStartTotal(state),
        donationCurrentTotal: getDonationCurrentTotal(state),
        showDonationData: getShowDonationData(state),
        fundraiserTarget:getFundraiserTarget(state),
        fundraiserTotal:getFundraiserTotal(state),
        displayMode:getDisplayMode(state)
    }
}

export default connect(mapStateToProps)(App);

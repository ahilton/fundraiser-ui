import React, {Component} from 'react';

import {connect} from 'react-redux'

import {
    getDonationCurrentTotal,
    getDonationStartTotal,
    getFundraiserTarget,
    getFundraiserTotal,
} from '../redux/funding'
import Slide from "./Slide";
import Ticker from "../components/Ticker";

class TickerSlide extends Component {

    render() {

        const {
            donationStartTotal,
            donationCurrentTotal,
            fundraiserTarget,
            fundraiserTotal
        } = this.props

        var donationTotal = donationCurrentTotal - donationStartTotal
        var total = donationTotal + fundraiserTotal

        var safeFundraiserTarget = (fundraiserTarget && fundraiserTarget>1)?fundraiserTarget:10000

        var fundraiserPct = (total >= fundraiserTarget) ? 100 : Math.round((total / safeFundraiserTarget)* 100)

        return (
            <Slide>
                <Ticker {...{
                    fundraiserTotal:total,
                    fundraiserTarget:fundraiserTarget,
                    fundraiserPct:fundraiserPct
                }}/>
            </Slide>
        )
    }
}

function mapStateToProps(state) {
    return {
        donationStartTotal: getDonationStartTotal(state),
        donationCurrentTotal: getDonationCurrentTotal(state),
        fundraiserTarget:getFundraiserTarget(state),
        fundraiserTotal:getFundraiserTotal(state),
    }
}

export default connect(mapStateToProps)(TickerSlide);
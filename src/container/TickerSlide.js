import React, {Component} from 'react';

import {connect} from 'react-redux'

import {getTickerDisplayData,} from '../redux/funding'
import Slide from "./Slide";
import Ticker from "../components/Ticker";

class TickerSlide extends Component {

    render() {

        const {
            tickerData,
            showNight = false
        } = this.props

        var total = showNight ? tickerData.nightTotal : tickerData.total
        var target = showNight ? tickerData.nightTarget : tickerData.totalTarget
        var safeFundraiserTarget = (target && target > 1) ? target : 350000

        var fundraiserPct = (total >= safeFundraiserTarget) ? 100 : Math.round((total / safeFundraiserTarget) * 100)

        return (
            <Slide>
                <Ticker {...{
                    fundraiserTotal: total ? total : 0,
                    fundraiserTarget: target ? target : 350000,
                    fundraiserPct: fundraiserPct ? fundraiserPct : 0,
                    message: showNight ? <span>Amount Raised <b>Tonight</b></span> : 'Total Amount Raised'
                }}/>
            </Slide>
        )
    }
}

function mapStateToProps(state) {
    return {
        tickerData: getTickerDisplayData(state),
    }
}

export default connect(mapStateToProps)(TickerSlide);
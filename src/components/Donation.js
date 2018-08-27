
import React, {Component} from 'react';

import posed from "react-pose";
import Progress from "./Progress";

// import { Colors, Icon } from "@blueprintjs/core";
// import {Box, Flex} from "reflexbox";
// import StockCard from "./StockCard";


export default class Donation extends Component {

    render() {

        const Notify = posed.div({
            bottom: {
                y: 50
            },
            top: {
                y:-10,
                transition: {
                    // loop:Infinity,
                    duration:25000,
                    yoyo:Infinity
                }
            }
        })

        var {showDonationData} = this.props
        var {name, amount, message, time} = showDonationData.donation
        amount = amount.replace("$", "")
        var title = showDonationData.isNew?"New Online Donation!":"Recent Online Donation"
        var timeAgo =showDonationData.isNew?"":time
        return (
            <div style={{textAlign: 'center'}}>
                <div className="softFontBlue" style={{
                    fontSize:50,
                    marginBottom:30
                }}>
                    <b>{title}</b>
                    <div className="softFontRed">
                        <b style={{
                            fontSize:30
                        }}>{timeAgo}</b>
                    </div>
                </div>

                <Notify style={this.props.style}
                        initialPose={'bottom'}
                        pose={'top'}
                >

                    <div style={{
                        fontSize: 90,
                        marginLeft:-70
                    }}>
                        <span className="dollar">$&nbsp;
                        </span>
                        <b style={{
                            fontSize: 140
                        }}>{amount.toLocaleString()}</b>

                    </div>

                    <div style={{
                        fontSize:50,
                        marginBottom:20
                    }}>
                        {name}
                    </div>
                    {message && <div className='softFontBlue example-twitter' style={{
                        fontFamily:'journal',
                        fontSize:35,
                        fontStyle: 'italic',
                        width:600
                    }}>
                        {message}
                    </div>}
                </Notify>
            </div>
        )
    }
}


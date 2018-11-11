import React, {Component} from 'react';

import posed from "react-pose";
import Slide from "./Slide";
import {connect} from "react-redux";
import {getShowDonationData} from "../redux/funding";

class DonationSlide extends Component {

    render() {

        const Notify = posed.div({
            bottom: {
                y: 50
            },
            top: {
                y: -10,
                transition: {
                    // loop:Infinity,
                    duration: 25000,
                    yoyo: Infinity
                }
            }
        })

        var {showDonationData} = this.props
        if (!showDonationData) {
            return <Slide/>
        }
        var {name, amount, message, time} = showDonationData
        amount = amount.replace("$", "")
        var title = showDonationData.isNew ? "New Online Donation!" : "Recent Online Donation"
        var timeAgo = showDonationData.isNew ? "" : time
        return (
            <Slide showFooter={false}>
                <div className="softFontBlue" style={{
                    fontSize: 50,
                    marginTop: 30,
                    marginBottom: 30
                }}>
                    <b>{title}</b>
                    <div className="softFontRed">
                        <b style={{
                            fontSize: 30
                        }}>{timeAgo}</b>
                    </div>
                </div>

                <Notify style={this.props.style}
                        initialPose={'bottom'}
                        pose={'top'}
                >

                    <div style={{
                        fontSize: 90,
                        marginLeft: -70
                    }}>
                        <span className="dollar">$&nbsp;
                        </span>
                        <b style={{
                            fontSize: 140
                        }}>{amount.toLocaleString()}</b>

                    </div>

                    <div style={{
                        fontSize: 50,
                        marginBottom: 20
                    }}>
                        {name}
                    </div>
                    {message && <div className='softFontBlue example-twitter' style={{
                        fontFamily: 'journal',
                        fontSize: 35,
                        fontStyle: 'italic',
                        width: 600
                    }}>
                        {message}
                    </div>}
                </Notify>
            </Slide>
        )
    }
}

function mapStateToProps(state) {
    return {
        showDonationData: getShowDonationData(state)
    }
}

export default connect(mapStateToProps)(DonationSlide);
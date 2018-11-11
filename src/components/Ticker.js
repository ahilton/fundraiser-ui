import React, {Component} from 'react';

import posed from "react-pose";
import Progress from "./Progress";

export default class Ticker extends Component {

    render() {

        var {fundraiserTotal, fundraiserTarget, fundraiserPct, message} = this.props

        const Animate = posed.div({

            above: {
                opacity: 0,
                y: -500
            },
            normal: {
                opacity: 1,
                y: 0
            }
        })

        return (
            <div style={{textAlign: 'center'}}>

                <div className="tickerTitle" style={{
                    fontSize: 50,
                    marginBottom: 30
                }}>

                    {message}
                </div>
                <Animate initialPose={'above'}
                         pose={'normal'}
                >
                    <div style={{
                        fontSize: 90,
                        marginLeft: -50
                    }}>
                        <span className="dollar">$&nbsp;
                        </span>
                        <b style={{
                            fontSize: 140

                        }}>{fundraiserTotal.toLocaleString()}</b>
                        {/*{this.props.highlightDonation && this.highlightDonation()}*/}


                    </div>
                </Animate>

                <Progress {...{
                    fundraiserTarget: fundraiserTarget,
                    fundraiserPct: fundraiserPct
                }}/>
            </div>
        )
    }
}


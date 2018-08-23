
import React, {Component} from 'react';

import posed from "react-pose";
import Progress from "./Progress";

// import { Colors, Icon } from "@blueprintjs/core";
// import {Box, Flex} from "reflexbox";
// import StockCard from "./StockCard";


export default class Ticker extends Component {

    render() {

        var {fundraiserTotal, fundraiserTarget, fundraiserPct} = this.props

        const Square = posed.div({
            // hoverable: true,
            // pressable: true,
            // init:{
            //     y: 100,
            // },
            // idle: {
            //     y:0
            // }
            above: {
                opacity:0,
                y: -500
            },
            normal: {
                opacity:1,
                y:0
            }
            // ease: easing.backOut,
            // flip: Infinity
            // hover:{
            //     scale: 2,
            // },
            // idle: {
            //     scale: 1,
            //     transition: {
            //         type: 'physics',
            //         delay: 400,
            //         duration: 7000
            //     }
            // },
            // hovered: {
            //     scale: 1.5,
            //     transition: {
            //         type: 'physics',
            //         delay: 400,
            //         duration: 7000
            //     }
            // }
        })

        return (
           <div style={{textAlign: 'center'}}>
            <Square style={this.props.style}
                    initialPose={'above'}
                    pose={'normal'}
            >
                <div className="softFontBlue" style={{
                    fontSize:50,
                    marginBottom:50
                }}>
                    {/*<span className="pt-icon-standard pt-icon-bank-account"*/}
                        {/*style={{fontSize:50}}*/}
                    {/*/> */}
                    Amount Raised <b>Today</b>
                </div>

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


                    {/*<Thermometer/>*/}
                </div>
                <Progress {...{
                    fundraiserTarget: fundraiserTarget,
                    fundraiserPct: fundraiserPct
                }}/>
            </Square>
           </div>
        )
    }
}


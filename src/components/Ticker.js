
import React, {Component} from 'react';

import posed from "react-pose";
import Progress from "./Progress";

// import { Colors, Icon } from "@blueprintjs/core";
// import {Box, Flex} from "reflexbox";
// import StockCard from "./StockCard";


export default class Ticker extends Component {

    render() {

        var {fundraiserTotal, fundraiserTarget, fundraiserPct} = this.props

        const Animate = posed.div({

            above: {
                opacity:0,
                y: -500
            },
            normal: {
                opacity:1,
                y:0
            }
        })

        return (
           <div style={{textAlign: 'center'}}>

                <div className="softFontBlue" style={{
                    fontSize:50,
                    marginBottom:50
                }}>

                    Amount Raised <b>Today</b>
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


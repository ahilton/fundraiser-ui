

import React, {Component} from 'react';

// import { Colors, Icon } from "@blueprintjs/core";
// import {Box, Flex} from "reflexbox";
// import StockCard from "./StockCard";

export default class Progress extends Component {

    render() {
        const {fundraiserTarget, fundraiserPct} = this.props
        console.log('fundraiserTarget, pct:'+fundraiserPct)
        return (
            <div style={{
                width:600
            }}>
                <div className="pt-progress-bar pt-no-animation" style={{
                //width:600,
                height: 30
            }}>

                <div className="pt-progress-meter" style={{
                    backgroundColor:'#207EA9',
                    width:fundraiserPct+'%'}}></div>

                </div>
                <div style={{
                    //position:'relative',
                    //left:500,
                    fontSize:40,
                    // alignContent:'right',
                    // alignItems:'right',
                    textAlign:'right'
                }}>
                    <div style={{
                        marginTop:10
                    }} className="softFontBluex">Target</div>
                    <div >
                        <span className="dollar">$</span>
                        <b style={{
                            fontSize: 50
                        }}>{fundraiserTarget.toLocaleString()}</b>
                    </div>
                </div>
            </div>
        )
    }
}


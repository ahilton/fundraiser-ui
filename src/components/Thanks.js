import React, {Component} from 'react';

import posed from "react-pose";

// import { Colors, Icon } from "@blueprintjs/core";
// import {Box, Flex} from "reflexbox";
// import StockCard from "./StockCard";

var ava = require('../img/ava.jpg')

export default class Thanks extends Component {

    render() {

        const Notify = posed.div({
            bottom: {
                y: 100
            },
            top: {
                y: -100,
                transition: {
                    // loop:Infinity,
                    duration: 25000,
                    yoyo: Infinity
                }
            }
        })

        return (
            <div style={{
                display: 'flex',
                // flex: 1,
                textAlign: 'center',
                height: '100%',
                width: 1000
            }}>
                <div style={{
                    width: 600,
                    flex: '50%',
                    // height: '100%',
                }}>
                    <img src={ava} width={500}/>
                </div>
                <div className="softFontBlue" style={{
                    width: 600,
                    height: '100%',
                    // backgroundColor: 'blue',
                    display: 'flex',
                    flex: '50%',
                    alignItems: 'center', // vertical
                    justifyContent: 'center', //horizontal
                }}>
                    <Notify
                        initialPose={'bottom'}
                        pose={'top'}
                    >
                        <div style={{
                            // flex: 1,
                            fontSize: 40,
                            width: 270,
                            fontWeight:400
                        }}>
                            Thanks for your generous support!
                            <div style={{
                                color:'#E99F86',
                                marginTop:50
                            }}>
                                <span className="pt-icon-standard pt-icon-heart" style={{
                                    fontSize:60
                                }}/>
                            </div>
                        </div>
                    </Notify>
                </div>

                <div>

                </div>
            </div>
        )
    }
}


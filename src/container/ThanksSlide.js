import React, {Component} from 'react';

import posed from "react-pose";
import Slide from "./Slide";

var ava = require('../img/ava.jpg')

export default class ThanksSlide extends Component {

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
            <Slide showFooter={false}>
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
                        marginTop: -50
                    }}>
                        <img src={ava} width={500}/>
                    </div>
                    <div className="softFontBlue" style={{
                        width: 600,
                        height: '100%',
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
                                fontSize: 60,
                                width: 370,
                                fontWeight: 400
                            }}>
                                <b>Thanks for your generous support!</b>
                                <div style={{
                                    color: '#E99F86',
                                    marginTop: 50
                                }}>
                                <span className="pt-icon-standard pt-icon-heart" style={{
                                    fontSize: 60
                                }}/>
                                </div>
                            </div>
                        </Notify>
                    </div>
                </div>
            </Slide>
        )
    }
}


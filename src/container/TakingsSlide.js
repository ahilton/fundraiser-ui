import React, {Component} from 'react';

import posed from "react-pose";
import Slide from "./Slide";


export default class TakingsSlide extends Component {

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

        var {takings} = this.props

        return (
            <Slide showFooter={false}>
                <div className="softFontBlue" style={{
                    fontSize: 50,
                    marginBottom: 30
                }}><b>Community Event Takings</b>
                </div>
                <div style={{
                    color: '#E99F86',
                    marginTop: 30
                }}>
                    <span className="pt-icon-standard pt-icon-bank-account" style={{
                        fontSize: 80
                    }}/>
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
                        }}>{takings.toLocaleString()}</b>

                    </div>

                    <div style={{
                        fontSize: 50,
                        marginBottom: 20
                    }}>
                        {/*{name}*/}
                    </div>

                </Notify>
            </Slide>
        )
    }
}


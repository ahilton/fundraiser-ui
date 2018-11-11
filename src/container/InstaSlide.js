import React, {Component} from 'react';

import {connect} from 'react-redux'

import posed from "react-pose";
import Slide from "./Slide";
import {getConfig, getInstaDisplayData} from "../redux/funding";
import Footer from "../components/Footer";

var selfie = require('../img/peopleSelfie.png')
var igram = require('../img/instragramLogo.png')

class InstaSlide extends Component {



    render() {

        const {hash, displaySrc} = this.props.displayData

        const Notify = posed.div({
            bottom: {
                y: 100
            },
            top: {
                y: -100,
                transition: {
                    // loop:Infinity,
                    duration: 25000,
                    //yoyo: Infinity
                }
            }
        })

        return (
            <Slide showFooter={false} showHeader={false}>


                <div style={{
                    display: 'flex',
                    // flex: 1,
                    textAlign: 'center',
                    height: '100%',
                    width: '100%'
                }}>
                    <Footer className='insta' {...{
                        lastSystemMessage: ""
                    }}>

                        <img src={igram} width='100px'/>
                        <p>
                            &nbsp;&nbsp;<b>#{hash}</b>
                        </p>
                    </Footer>
                    <div style={{
                        width: 600,
                        flex: '60%',
                        marginTop: -50
                    }}>
                        {displaySrc && <img src={displaySrc} width={700}/>}
                        {!displaySrc && <img src={selfie} width={500}/>}
                    </div>
                    <div className="softFontBlue" style={{
                        width: 600,
                        height: '100%',
                        display: 'flex',
                        flex: '40%',
                        alignItems: 'center', // vertical
                        justifyContent: 'center', //horizontal
                    }}>
                        <Notify
                            initialPose={'bottom'}
                            pose={'top'}
                        >
                            <div style={{
                                // flex: 1,
                                fontSize: 50,
                                width: 400,
                                fontWeight: 400
                            }}>
                                <p>Your Instragram on the big screen!</p>

                                <p>
                                    <img src={igram} width='200px'/>
                                </p>
                                <p style={{
                                    color:'pink',
                                    fontVariant: 'small-caps'
                                }}>
                                    <b>#{hash}</b>
                                </p>
                                <div style={{
                                    color: '#E99F86',
                                    marginTop: 50
                                }}>
                                <span className="pt-icon-standard pt-icon-instagram" style={{
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

function mapStateToProps(state) {
    return {
        displayData: getInstaDisplayData(state)
    }
}

export default connect(mapStateToProps)(InstaSlide);

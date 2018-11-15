import React, {Component} from 'react';

import {connect} from 'react-redux'

import posed from "react-pose";
import Slide from "./Slide";
import {getConfig, getInstaDisplayData} from "../redux/funding";
import Footer from "../components/Footer";
import InstagramHashes from "../components/InstagramHashes";

var selfie = require('../img/peopleSelfie.png')
var igram = require('../img/instragramLogo.png')

class InstaSlide extends Component {



    render() {

        const {hash, displaySrc} = this.props.displayData

        const Notify = posed.div({
            bottom: {
                y: 50
            },
            top: {
                y: -50,
                transition: {
                    // loop:Infinity,
                    duration: 35000,
                    //yoyo: Infinity
                }
            }
        })

        return (


                <div style={{
                    display: 'flex',
                    // flex: 1,
                    textAlign: 'center',
                    height: '100%',
                    width: '100%',
                    backgroundColor: '#000'
                }}>
                    {/*<Footer className='insta' {...{*/}
                        {/*lastSystemMessage: ""*/}
                    {/*}}>*/}

                        {/*<img src={igram} width='100px'/>*/}
                        {/*<p>*/}
                            {/*&nbsp;&nbsp;<b>Support</b>*/}
                        {/*</p>*/}
                    {/*</Footer>*/}
                    <div style={{
                        width: 600,
                        flex: '60%',
                        // marginTop:150
                        // marginTop: -50
                    }}>
                        {displaySrc && <img src={displaySrc} width={700}/>}
                        {!displaySrc && <img src={selfie} width={500}/>}
                    </div>
                    <div className="softFontBlue" style={{
                        width: 600,
                        marginRight: 200,
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
                            <div >
                                <h1 style={{
                                    // flex: 1,
                                    width: 400,
                                    color: 'white',
                                    fontSize: 50,
                                    lineHeight: '1.1em',
                                }}>...and get your photo on the big screen!</h1>

                                <p>
                                    <img src={igram} width='200px'/>
                                </p>
                                {/*<p style={{*/}
                                    {/*color:'pink',*/}
                                    {/*fontVariant: 'small-caps',*/}
                                    {/*letterSpacing:5*/}
                                {/*}}>*/}
                                    {/*<b>#{hash}</b>*/}
                                {/*</p>*/}
                                <InstagramHashes hash={hash}/>

                                <div style={{
                                    color: '#E99F86',
                                    marginTop: 50
                                }}>
                                <span className="pt-icon-standard pt-icon-instagram" style={{
                                    fontSize: 60,
                                }}/>
                                </div>
                            </div>
                        </Notify>
                    </div>
                </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        displayData: getInstaDisplayData(state)
    }
}

export default connect(mapStateToProps)(InstaSlide);

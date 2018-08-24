import React, {Component} from 'react';

import posed from "react-pose";
import Cover from "react-video-cover"

// import { Colors, Icon } from "@blueprintjs/core";
// import {Box, Flex} from "reflexbox";
// import StockCard from "./StockCard";
var fw = require('../video/fireworks2.mp4')

export default class FireworksContainer extends Component {

    render() {

        const Notify = posed.div({
            bottom: {
                y: 200,
                scale: 0.2,
            },
            top: {
                y: 0,
                scale: 1,
                transition: {
                    // loop:Infinity,
                    // duration: 2000,
                    // yoyo: Infinity
                }
            }
        })

        const videoOptions = {
            src: fw,
            autoPlay: true,
            loop: true,
        };

        const style = {
            width: '100%',
            height: '100%',
            // position: 'fixed',
            // top: 0,
            // left: 0,
            // zIndex: -1,
        };

        return (
            <div style={{
                display: 'flex',
                // flex: 1,
                textAlign: 'center',
                height: '100%',
                width: '100%',
                //backgroundColor: 'black',
                alignItems: 'center', // vertical
                justifyContent: 'center', //horizontal
            }}>
                {/*<video*/}
                    {/*style={{*/}
                        {/*objectFit: 'cover',*/}
                        {/*width: '100%',*/}
                        {/*height: '100%',*/}
                    {/*}}*/}
                    {/*src={fw}*/}
                {/*/>*/}
                <Cover style={style}
                    videoOptions={videoOptions}
                />

                <div style={{position:'absolute'}}>
                <Notify
                    style={{width:500}}
                    initialPose={'bottom'}
                    pose={'top'}
                >
                    <div style={{
                        // flex: 1,
                        fontSize: 80,
                        // width: 270,
                        fontWeight: 400,
                        color: '#F9F0BB',
                        textShadow: '-3px 0 black, 0 3px black, 3px 0 black, 0 -3px black'

                    }}>
                        <b>New Online Donation!</b>
                        {/*<div style={{*/}
                            {/*marginTop: 50,*/}
                            {/*color: '#F3E598'*/}
                        {/*}}>*/}
                            {/*<span className="pt-icon-standard pt-icon-star-empty" style={{*/}
                                {/*fontSize: 100*/}
                            {/*}}/>*/}
                        {/*</div>*/}
                    </div>
                </Notify>
                </div>
            </div>

        )
    }
}


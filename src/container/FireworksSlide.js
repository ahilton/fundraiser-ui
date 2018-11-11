import React, {Component} from 'react';

import posed from "react-pose";
import Cover from "react-video-cover"

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
            height: '100%'
        };

        const {message} = this.props

        return (
            <div style={{
                display: 'flex',
                textAlign: 'center',
                height: '100%',
                width: '100%',
                alignItems: 'center', // vertical
                justifyContent: 'center', //horizontal
            }}>
                <Cover style={style} videoOptions={videoOptions}/>

                <div style={{position: 'absolute'}}>
                    <Notify
                        style={{width: 500}}
                        initialPose={'bottom'}
                        pose={'top'}
                    >
                        <div className='fireworksText' style={{

                        }}>
                            <b>{message}</b>
                        </div>
                    </Notify>
                </div>
            </div>

        )
    }
}


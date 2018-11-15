import React, {Component} from 'react';
import {connect} from 'react-redux'
import posed from "react-pose";

import {getAvaPictureIndex} from "../redux/funding";

var ava1 = require('../img/ava1.png')
var ava2 = require('../img/ava2.png')
var ava3 = require('../img/ava3.png')
var ava4 = require('../img/ava4.png')
var ava5 = require('../img/ava5.png')
var ava6 = require('../img/ava6.png')
var ava7 = require('../img/ava7.png')
var ava8 = require('../img/ava8.png')
var ava9 = require('../img/ava9.png')
var ava10 = require('../img/ava10.png')

const images = [
    ava1,
    ava2,
    ava3,
    ava4,
    ava5,
    ava6,
    ava7,
    ava8,
    ava9,
    ava10
]

class AvaPictureSlide extends Component {

    render() {
        const {index} = this.props

        const img = images[index?index:0]

        const Notify = posed.div({
            bottom: {
                scaleY: 1,
                scaleX: 1
            },
            top: {
                scaleY: 1.1,
                scaleX: 1.1,
                transition: {
                    duration: 25000,
                }
            }
        })

        return (
            <div style={{
                display: 'flex',
                flex: 1,
                alignItems: 'center', // vertical
                justifyContent: 'center', //horizontal
                flexDirection: 'column',
                textAlign: 'center',
                backgroundColor: 'black'
            }}><Notify
                initialPose={'bottom'}
                pose={'top'}
            >
                <div style={{height: '100%'}}>
                <img src={img} style={{height: '100%'}}/>
                </div>
            </Notify>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        index: getAvaPictureIndex(state)
    }
}

export default connect(mapStateToProps)(AvaPictureSlide);

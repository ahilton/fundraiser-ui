import React, {Component} from 'react';
import {connect} from 'react-redux'
import posed from "react-pose";

import {getAvaPictureIndex} from "../redux/funding";

var ava2 = require('../img/ava2.png')
var ava3 = require('../img/ava3.png')
var ava4 = require('../img/ava4.png')
var ava6 = require('../img/ava6.png')
var ava7 = require('../img/ava7.png')
var ava8 = require('../img/ava8.png')
var ava10 = require('../img/ava10.png')
var ava11 = require('../img/AvaPics-01.png')
var ava12 = require('../img/AvaPics-02.png')
var ava13 = require('../img/AvaPics-03.png')
var ava14 = require('../img/AvaPics-04.png')
var ava15 = require('../img/AvaPics-05.png')
var ava16 = require('../img/AvaPics-06.png')
var ava17 = require('../img/AvaPics-08.png')
var ava18 = require('../img/AvaPics-09.png')
var ava19 = require('../img/AvaPics-13.png')
var ava20 = require('../img/AvaPics-16.png')

const images = [
    ava2,
    ava3,
    ava4,
    ava6,
    ava7,
    ava8,
    ava10,
ava11,
ava12,
ava13,
ava14,
ava15,
ava16,
ava17,
ava18,
ava19,
ava20
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
                <img src={img} style={{width: '100%'}}/>
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

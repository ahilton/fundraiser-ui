import React, {Component} from 'react';

var staticImg = require('../img/static.png')

export default class StaticSlide extends Component {

    render() {
        return (
            <div style={{
                display: 'flex',
                flex: 1,
                alignItems: 'center', // vertical
                justifyContent: 'center', //horizontal
                flexDirection: 'column',
                textAlign: 'center',
                backgroundColor: 'black'
            }}><img src={staticImg} style={{width: '100%'}}/>
            </div>
        )
    }
}


import React, {Component} from 'react';

var staticImg = require('../img/staticBlank.png')

export default class FriendsSponsorSlide extends Component {

    render() {
        return (
            <div style={{
                display: 'flex',
                flex: 1,
                alignItems: 'center', // vertical
                justifyContent: 'center', //horizontal
                flexDirection: 'column',
                textAlign: 'center',
                backgroundColor: 'black',
                backgroundImage: `url(${staticImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center top',
            }}>
                {/*<img src={staticImg} style={{width: '100%', position:'absolute', zIndex:-10}}/>*/}
                <div style={{textAlign:'center', marginTop:-100}}>
                    <h1 style={{
                        color:'white',
                        fontSize: 80,
                        marginBottom: 100
                    }}>Friends of Ava</h1>
                    <h2 style={{
                        color:'#bbbbbb',
                        fontSize: 50,
                        fontWeight: 300,
                        width: '60%',
                        lineHeight: '1.1em',
                        margin: '0 auto 0 auto'

                    }}>thank you to all the <b>amazing individuals & businesses</b> that have helped support Ava...</h2>

                </div>
            </div>
        )
    }
}


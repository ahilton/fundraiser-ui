import React, {Component} from 'react';
import {getInstaDisplayData} from "../redux/funding";

import {connect} from 'react-redux'
import InstagramHashes from "../components/InstagramHashes";

var staticImg = require('../img/static.png')

class StaticSlide extends Component {

    render() {
        const {hash} = this.props.displayData

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
                <div style={{textAlign: 'center', width: '100%', padding: '0 300px 0 300px',}}>
                    <h1></h1>

                    <InstagramHashes hash={hash}/>

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

export default connect(mapStateToProps)(StaticSlide);

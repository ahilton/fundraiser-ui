import React, {Component} from 'react';

import {connect} from 'react-redux'
import {getInstaDisplayData} from "../redux/funding";
import InstagramHashes from "../components/InstagramHashes";

var staticImg = require('../img/staticBlank.png')
var igram = require('../img/instragramLogo.png')

class InstaIntroSlide extends Component {

    render() {
        const {hash} = this.props.displayData

        return (
            <div style={{
                display: 'flex',
                flex: 1,
                alignItems: 'center', // vertical
                justifyContent: 'top', //horizontal
                flexDirection: 'column',
                textAlign: 'center',
                backgroundColor: 'black',
                backgroundImage: `url(${staticImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center top',
            }}>
                <img src={igram} width='200px' style={{
                    marginBottom: 50,
                    marginTop: 50
                }}/>
                {/*<img src={staticImg} style={{width: '100%', position:'absolute', zIndex:-10}}/>*/}
                <div style={{textAlign: 'center', width: '100%', padding: '0 300px 0 300px',}}>
                    <h1></h1>
                    <h1 style={{
                        color: 'white',
                        fontSize: 50,
                        lineHeight: '1.1em',
                        marginBottom: 50
                        // margin: '0 auto 100 auto',
                        // width: '66%'
                    }}>Share our magical night and help drive more donations for Ava...</h1>


                    <InstagramHashes hash={hash}/>
                    {/*{*/}
                        {/*hash && hash.split(",").map(str =>*/}
                            {/*<h2 key={str + "instaHash"} style={{*/}
                                {/*color: '#e2c75a',*/}
                                {/*fontSize: 50,*/}
                                {/*fontWeight: 500,*/}
                                {/*marginBottom:20*/}
                            {/*}}>*/}
                                {/*#{str}*/}
                            {/*</h2>*/}
                        {/*)*/}
                    {/*}*/}

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

export default connect(mapStateToProps)(InstaIntroSlide);
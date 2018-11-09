import React from 'react'
import Footer from "../components/Footer";
import Balloon from "../components/Balloon";

var skyline = require('../img/skyline.png')

const Slide = ({children, showBalloon = false, showFooter = true, showHeader = true}) => (

    <div style={{
        display: 'flex',
        flex: 1,
        alignItems: 'center', // vertical
        justifyContent: 'center', //horizontal
        flexDirection: 'column',
        textAlign: 'center',
        marginTop: 200
    }}>
        {showBalloon && <Balloon style={{
        position:'absolute',
        top:250,
        left:60,
        // opacity: 0.8
        }}/>}

        {children}

        {showHeader && <Footer {...{
            lastSystemMessage: ""
        }}>
            <div><b>avas</b>journey.com.au</div>
        </Footer>}

        {showFooter && <div style={{
            width: '100%',
            position: 'fixed', left: 0, bottom: 0,
            display: 'flex',
            alignItems: 'center', // vertical
            justifyContent: 'center', //horizontal
            textAlign: 'center',
            paddingBottom: 10,
            zIndex: -10
        }}>
            <div style={{
                maxWidth: 1000
            }}>
                <img src={skyline} style={{width: '100%'}}/>
            </div>
        </div>}

    </div>
)


export default Slide
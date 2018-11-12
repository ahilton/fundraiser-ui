import React, {Component} from 'react';

import {connect} from 'react-redux'

import posed from "react-pose";
import {getAuctionDisplayData} from "../redux/funding";

var auction1ChrisBg = require('../img/auction1-chris-bg.png')
var auction1Chris = require('../img/auction1-chris.png')
var auction2Jewel = require('../img/auction2-jewel.png')
var auction2JewelBg = require('../img/auction2-jewel-bg.png')
var auction3GolfBg = require('../img/auction3-golf-bg.png')
var auction3Golf = require('../img/auction3-golf.png')
var auction4Kerry = require('../img/auction4-kerry.png')
var auction4KerryBg = require('../img/auction4-kerry-bg.png')
var auction5Merc = require('../img/auction5-merc.png')
var auction6Dinner = require('../img/auction6-dinner.png')
var auction7DriveBg = require('../img/auction7-drive-bg.png')
var auction8Bali = require('../img/auction8-bali.png')
var auction8BaliBg = require('../img/auction8-bali-bg.png')
var auction9Golf = require('../img/auction9-golf.png')
var skyline = require('../img/skyline.png')

const auctionItems = [
    {
        number: 1,
        title: 'Christopher Blank',
        subTitle: 'Custom created furniture for a lifetime',
        bgImg: auction1ChrisBg,
        left:
            <div>
                <img src={auction1Chris} style={{
                    width: '600px',
                    border: '20px solid #eee',
                    borderRadius: '30px'
                }}/>
            </div>,
        right: <div style={{
            textAlign: 'left',
            fontSize: '30px',
            // flex: 1,
            // backgroundColor: 'red',
            padding: '20px',
            height: '500px',
            color: '#333'
            // display: 'flex',
        }}>
            <p>Donated by:</p>
            <p style={{color: '#000', fontSize: '34px'}}><b>Christopher Blank Furniture</b></p>
            <p>Value: <b style={{color: '#000', fontSize: '34px'}}>$5,500</b></p>
        </div>
    }, {
        number: 2,
        title: 'Kallure',
        subTitle: <div><p>3.4ct emerald cut green amethyst and diamond ring set in 18ct white gold</p><p>custom made for
            you</p></div>,
        bgImg: auction2JewelBg,
        right:
            <div style={{
                marginRight: '50px'
            }}>
                <img src={auction2Jewel} style={{
                    width: '400px'
                }}/>

            </div>,
    }, {
        number: 3,
        title: 'Barnbougle Dunes and Launceston Golf Club',
        subTitle: '4 people for 3 nights',
        bgImg: auction3GolfBg,
        right:
            <div style={{
                marginTop: '150px'
            }}>
                <img src={auction3Golf} style={{
                    width: '500px'
                }}/>
            </div>,
        left:
            <div style={{
                textAlign: 'left',
                fontSize: '25px',
                lineHeight: '50px',
                padding: '20px',
                color: '#EFEFEF',
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                borderRadius:'20px'
            }}
            >
                <h1 style={{
                    fontSize: '30px',
                    lineHeight: '50px',
                    color: '#e2c75a'
                }}>Tasmanian Golfers Dream Stay - 4 people, 3 nights, 2 courses</h1>
                <ul>
                    <li>3 night stay in a central 2 bedroom Launceston cottage w/ spa</li>
                    <li>Round of 18 at the famous BARNBOUGLE DUNES</li>
                    <li>Round of 18 at the LAUNCESTON GOLF CLUB with cart</li>
                    <li>Tamar Valley Wine Pack plus MIZUNO Golf Travel Bag (1 per booking)</li>
                </ul>
            </div>
    }, {
        number: 4,
        title: 'Kerry Armstrong',
        subTitle: 'Internationally recognised abstract impressionist',
        bgImg: auction4KerryBg,
        left:
            <div style={{
                marginRight: '100px',
                marginTop: '100px'
            }}>
                <img src={auction4Kerry} style={{
                    width: '400px'
                }}/>
            </div>,
    }, {
        number: 5,
        title: '2019 Mercedes-Benz A 180',
        subTitle: 'Global benchmark in the compact class',
        left:
            <div style={{}}>
                <img src={auction5Merc} style={{
                    width: '800px'
                }}/>
            </div>,
    }, {
        number: 6,
        title: 'Phillipe Mouchel',
        subTitle: 'Private dinner party for 10 with award-winning French chef',
        bgImg: auction6Dinner
    }, {
        number: 7,
        title: 'Mercedes-Benz Brighton Drive Day for 12 guests',
        subTitle: '',
        bgImg: auction7DriveBg
    }, {
        number: 8,
        title: 'Luxury Bali Escape',
        subTitle: '8 person private villa for 5 nights',
        bgImg: auction8BaliBg,
        left:
            <div style={{
                marginRight: '50px'
            }}>
                <img src={auction8Bali} style={{
                    width: '500px'
                }}/>
            </div>,
    }, {
        number: 9,
        title: 'TaylorMade Golf Package',
        subTitle: '',
        bgImg: auction9Golf
    },

]

class AuctionSlide extends Component {


    render() {

        const {liveMode, displayIndex} = this.props.displayData

        const Notify = posed.div({
            bottom: {
                y: 100
            },
            top: {
                y: -100,
                transition: {
                    // loop:Infinity,
                    duration: 25000,
                    //yoyo: Infinity
                }
            }
        })

        let item = auctionItems[displayIndex];

        return (
            <div style={{
                display: 'flex', flex: 1,
                alignItems: 'center', // vertical
                justifyContent: 'start', //horizontal
                flexDirection: 'column',
                textAlign: 'center',
            }}>

                <div className='auctionTitle'>

                    <div className='auctionItemNumber' style={{}}>
                        <h3>live auction</h3>
                        <h1>Item <b>{item.number}</b></h1>
                    </div>
                    <h1>{item.title}</h1>
                    <h2>{item.subTitle}</h2>
                </div>
                <div style={{
                    height: '100%',
                    width: '100%',
                    position: 'relative',
                    zIndex: -10,
                    backgroundColor: '#222',
                    padding: '1.5em',
                    backgroundImage: `url(${item.bgImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center top',
                    paddingTop: 0,
                    display: 'flex', flex: 1,
                    alignItems: 'center', // vertical
                    justifyContent: 'center', //horizontal
                    flexDirection: 'column',
                    textAlign: 'center',
                }}>

                    <div style={{
                        display: 'flex', flex: 1,
                        alignItems: 'center', // vertical
                        justifyContent: 'start', //horizontal
                        flexDirection: 'row',
                        textAlign: 'center',
                        width: '100%'
                    }}>
                        <div style={{
                            flex: '60%',

                        }}>
                            {item.left && item.left}
                        </div>
                        <div className="softFontBlue" style={{
                            // display: 'flex',
                            flex: '40%',
                        }}>
                            {item.right && item.right}
                        </div>
                    </div>

                </div>


                {!item.bgImg && <div style={{
                    width: '100%',
                    position: 'fixed', left: 0, bottom: 0,
                    display: 'flex',
                    alignItems: 'center', // vertical
                    justifyContent: 'center', //horizontal
                    textAlign: 'center',
                    paddingBottom: 10,
                    zIndex: -20
                }}>
                    <div style={{
                        maxWidth: 1000
                    }}>
                        <img src={skyline} style={{width: '100%'}}/>
                    </div>
                </div>}

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        displayData: getAuctionDisplayData(state)
    }
}

export default connect(mapStateToProps)(AuctionSlide);

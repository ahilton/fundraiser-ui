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
var sponsorMbb = require('../img/sponsor-mbb.png')

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
            padding: '20px',
            height: '500px',
            color: '#333'
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
        left: <div className='auctionDetail auctionDetailBottom'>
            <ul>
                <li>Join Kara Breadmore at Kallure Studio and mark the occasion with champagne and a custom fitting.
                </li>
                <li>VALUE: <b>$5,200</b></li>
            </ul>
        </div>
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
            <div className='auctionDetail'>
                <h1>Tasmanian Golfers Dream Stay - 4 people, 3 nights, 2 courses</h1>
                <ul>
                    <li>3 night stay in a central 2 bedroom Launceston cottage w/ spa</li>
                    <li>Round of 18 at the famous <b>BARNBOUGLE DUNES</b></li>
                    <li>Round of 18 at the <b>LAUNCESTON GOLF CLUB</b> with cart</li>
                    <li>Tamar Valley Wine Pack plus MIZUNO Golf Travel Bag (1 per booking)</li>
                </ul>
            </div>
    }, {
        number: 4,
        title: 'Kerry Armstrong',
        subTitle: 'Internationally recognised abstract impressionist',
        bgImg: auction4KerryBg,
        left:
            <div>
                <div style={{
                    marginRight: '200px'
                }}>
                    <img src={auction4Kerry} style={{
                        width: '300px'
                    }}/>
                </div>
                <div className='auctionDetail'>
                    <ul>
                        <li>140x150 oil painting on Belgian linen</li>
                        <li>‘String Bow’ was made especially for Ava’s Gala and is a part of the Tasting Flowers
                            series
                        </li>
                        <li>VALUE: <b>$10,500</b></li>
                        <li>Conditions: This original piece can be swapped for another of Kerry’s artworks to the same
                            value.
                        </li>
                    </ul>
                </div>
            </div>
        ,
    }, {
        number: 5,
        title: '2019 Mercedes-Benz A 180',
        subTitle: 'Global benchmark in the compact class',
        left:
            <div>
                <img src={auction5Merc} style={{
                    width: '800px'
                }}/>
            </div>,
        right: <div className='auctionDetail' style={{
            textAlign: 'center',
            backgroundColor: 'black',
            margin: 50
        }}>
            <div>
                <img src={sponsorMbb} style={{
                    width: '300px'
                }}/>
            </div>
            <p style={{
                marginBottom: 40,
                textAlign: 'LEFT'
            }}>
                The all new A-Class completely redefines modern luxury and interior design in the compact class. The
                Hatchback’s many technological advances set revolutionary standards. Enjoy the Mercedes-Benz User
                Experience, a multimedia system whose artificial intelligence makes it unique in its ability to learn.
            </p>
            <p>VALUE: <b>$49 245 (drive away)</b>
            </p>
        </div>
    }, {
        number: 6,
        title: 'Phillipe Mouchel',
        subTitle: 'Private dinner party for 10 with award-winning French chef',
        bgImg: auction6Dinner,
        left: <div className='auctionDetail auctionDetailTop'>

            <ul>
                <li>Transform your home into a fine dining restaurant with one of the world’s best French chefs and
                    service by a dedicated maître d’
                </li>
                <li>VALUE: <b>Priceless</b></li>
            </ul>
        </div>
    }, {
        number: 7,
        title: 'Mercedes-Benz Brighton Drive Day for 12 guests',
        subTitle: 'Treat your team and clients to the ultimate experience in prestige vehicles',
        bgImg: auction7DriveBg,
        left: <div className='auctionDetail auctionDetailTop'>
            <ul>
                <li>Mercedes-Benz Brighton will make available to you and 11 guests a selection of vehicles covering all variants, from the nimble and popular A-Class through to the high tech executive S-Class and performance AMG.</li>
                <li>Countryside driving experience to the Mornington Peninsula with a sumptuous dining experience with refreshments and entertainment.</li>

                <li>VALUE: <b>$6,000</b> ($500 per head)</li>
            </ul>
        </div>
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
        right: <div className='auctionDetail'>
            <ul>
                {/*<li>The villa is fully self-contained for quiet nights in, catered by your personal chef, and only 15-45 minutes away from everything beautiful Bali has to offer; stunning beaches, superb dining, nightlife and shopping in Canngu, Seminyak and Kuta- with a private driver to get you there.</li>*/}
                <li>Enjoy the tranquillity of the open-air lounge and dining area, the outdoor terrace with covered lounge and sunbathing deckchairs and the privacy of your very own lush garden swimming pool.</li>
                <li>VALUE: <b>$5,000</b></li>
            </ul>
        </div>
    }, {
        number: 9,
        title: 'TaylorMade Golf Package',
        subTitle: '',
        bgImg: auction9Golf,
        left: <div className='auctionDetail'>
            <ul>
                <li>Full set (14) of TaylorMade’s PGA tour approved clubs</li>
                <li>TaylorMade golf bag</li>
                <li>Gears by TaylorMade club fitting session at the brand new Performance Lab at TaylorMade Australia HQ. Gears is a full swing club and body tracking system used by PGA pros, club fitters, and club manufacturers to measure and analyse every nuance of a swing, in full 3D, from address to follow through.</li>
                <li>VALUE: <b>$5,000</b></li>
            </ul>
        </div>
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

import React, {Component} from 'react';
import {connect} from 'react-redux'
import posed from "react-pose";

import {getSponsorIndex} from "../redux/funding";

import sciclunas from '../img/sponsor-sciclunas.png'
import mbb from '../img/sponsor-mbb.png'
import rmc from '../img/sponsor-rmc.png'
import kao from '../img/sponsor-kao.png'
import buxton from '../img/sponsor-buxton.png'
import gallery from '../img/sponsor-sgm.png'
import cBlank from '../img/sponsor-cBlank.png'
import furphy from '../img/sponsor-furphy.png'
import kallure from '../img/sponsor-kallure.png'
import galaFund from '../img/sponsor-gala-fund.png'
import tennisaus from '../img/sponsors-tennis-aus.png'
import torello from '../img/sponsors-torello.png'
import cassy from '../img/sponsors-cassy.png'
import ferrari from '../img/sponsor-ferrari.png'
import clicceleb from '../img/sponsor-clicceleb.png'
import diamond from '../img/sponsor-diamond.png'
import molton from '../img/sponsor-molton.png'
import just from '../img/sponsor-justgroup.gif'
import kirsten from '../img/sponsor-kirsten.png'
import ali from '../img/sponsor-ali.png'
import liam from '../img/sponsor-liam.png'
import marriner from '../img/sponsor-marriner.png'
import bc from '../img/sponsor-bc.png'
import plaza from '../img/sponsor-plaza-hotel.png'
import converse from '../img/sponsor-converse.png'
import merlin from '../img/sponsor-merlin.png'
import sealife from '../img/sponsor-sealife.png'
import cablepark from '../img/sponsor-cablepark.png'
import smiggle from '../img/sponsor-smiggle.png'
import biozet from '../img/sponsor-biozet.png'
import tilnak from '../img/sponsor-tilnak.png'
import kms from '../img/sponsor-kms.png'
import jergens from '../img/sponsor-jergens.png'
import jfrieda from '../img/sponsor-jfrieda.png'
import biore from '../img/sponsor-biore.png'
import kmove from '../img/sponsor-kmove.png'
import rara from '../img/sponsor-rara.png'
import audioActive from '../img/sponsor-audioActive.png'
import colling from '../img/sponsor-colling.jpg'
import hawks from '../img/sponsor-hawks.png'
import pa from '../img/sponsor-pa.png'
import audible from '../img/sponsor-audible.png'
import jag from '../img/sponsor-jag.png'
import afl from '../img/sponsor-afl.png'
import lll from '../img/sponsor-lll.png'
import gk from '../img/sponsor-gamekeepers.png'
import grazing from '../img/sponsor-grazing.png'
import muka from '../img/sponsor-muka.jpg'
import glam from '../img/sponsor-glam.png'
import aia from '../img/sponsor-aia.png'
import pharma from '../img/sponsor-pharma.png'
import dius from '../img/sponsor-dius.png'
import soul from '../img/sponsor-loveyoursoul.png'
import muma from '../img/sponsor-muma.png'
import smallprint from '../img/sponsor-smallprint.jpg'
import chemist from '../img/sponsor-chemist.png'
import electrolux from '../img/sponsors-electrolux.png'
import fresco from '../img/sponsors-fresco.png'
import cocon from '../img/sponsors-cocon.png'
import motto from '../img/sponsor-motto.png'
import tla from '../img/sponsor-tla.jpg'



// import lion from '../img/sponsor-lion.png'
// import ff from '../img/sponsor-ff.png'
// import selements from '../img/sponsors-7e.png'
// import dairy from '../img/sponsor-dairy.png'
// import projekt from '../img/sponsor-projekt.jpg'
// import sam from '../img/sponsor-winesam.png'
// import iga from '../img/sponsor-iga.png'
// import xtend from '../img/sponsor-xtendbarre.png'
// import bdelight from '../img/sponsor-bdelight.jpeg'
// import bim from '../img/sponsor-bim.png'
// import rmelon from '../img/sponsor-rmelon.png'
// import choc from '../img/sponsor-choc.jpg'
// import trulys from '../img/sponsor-trulys.jpg'
// import hoflowers from '../img/sponsor-hoflowers.png'
// import brad from '../img/sponsor-brad.jpg'
// import et from '../img/sponsor-et.jpg'
// import ap from '../img/sponsor-ap.png'
// import bull from '../img/sponsor-bull.jpg'
// import taylor from '../img/sponsor-taylormade.png'
// import grammar from '../img/sponsor-grammar.jpg'
// import ao from '../img/sponsor-ao.png'
// import prol from '../img/sponsor-prol.png'
// import propharma from '../img/sponsor-pro-pharma.png'



const sponsors =[

cBlank,
furphy,
kallure,
galaFund,
tennisaus,
torello,
    sciclunas,
    mbb,
    rmc,
    kao,
    buxton,
    gallery,
    cassy,
ferrari,
clicceleb,
diamond,
molton,
just,
kirsten,
ali,
liam,
marriner,
bc,
plaza,
converse,
merlin,
sealife,
cablepark,
smiggle,
biozet,
tilnak,
kms,
jergens,
jfrieda,
biore,
kmove,
rara,
audioActive,
colling,
hawks,
pa,
audible,
jag,
afl,
lll,
gk,
grazing,
muka,
glam,
aia,
pharma,
dius,
soul,
muma,
smallprint,
chemist,
electrolux,
fresco,
cocon,
motto,
tla
]

const slidesPerPage = 6


class SponsorsSlide extends Component {

    render() {
        const {index} = this.props

        // 0 = 0 -> 5
        // 1 = 6 -> 11

        var startIndex = index * slidesPerPage
        var endIndex = startIndex + slidesPerPage - 1

        var imgs = []

        for (var i=startIndex; i<=endIndex; i++) {
            imgs.push(
                <div key={'sponsor'+i}>
                    <img src={sponsors[i % sponsors.length]} style={{
                        width:280,
                        margin:40
                    }}/>
                </div>
            )
        }

        // const sponsor = images[index?index:0]

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
                backgroundColor: '#efefef'
            }}>
                {/*<Notify*/}
                {/*initialPose={'bottom'}*/}
                {/*pose={'top'}*/}
            {/*></Notify>*/}
                <div style={{
                    display: 'flex',
                    // flex: 1,
                    flexDirection: 'row',
                    width: 1200,
                    flexWrap: 'wrap',
                    alignItems: 'center', // vertical
                    justifyContent: 'center', //horizontal
                    // flex-direction: column;
                    // vertical-align: middle;
                    // align-self: center!important;
                    // position: relative;
                    // display: inline-block;
                }}>
                    {imgs}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        index: getSponsorIndex(state)
    }
}

export default connect(mapStateToProps)(SponsorsSlide);

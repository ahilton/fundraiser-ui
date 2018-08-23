
import React, {Component} from 'react';

import posed from "react-pose";

// import { Colors, Icon } from "@blueprintjs/core";
// import {Box, Flex} from "reflexbox";
// import StockCard from "./StockCard";

var logo = require('../img/logo-t.png')

export default class Balloon extends Component {

    state = { hovering: false };

    render() {

        const Square = posed.div({
            // hoverable: true,
            // pressable: true,
            // init:{
            //     y: 100,
            // },
            // idle: {
            //     y:0
            // }
            top: {
                y: 50,
                x: 40,
                transition: {
                    // loop:Infinity,
                    duration:25000,
                    yoyo:Infinity
                }
            },
            bottom: {
                y: 150,
                x: -10
            }
            // ease: easing.backOut,
            // flip: Infinity
            // hover:{
            //     scale: 2,
            // },
            // idle: {
            //     scale: 1,
            //     transition: {
            //         type: 'physics',
            //         delay: 400,
            //         duration: 7000
            //     }
            // },
            // hovered: {
            //     scale: 1.5,
            //     transition: {
            //         type: 'physics',
            //         delay: 400,
            //         duration: 7000
            //     }
            // }
        })

        return (
            <Square style={this.props.style}
                    initialPose={'bottom'}
                    pose={'top'}
                    // onMouseEnter={() => this.setState({hovering:true})}
                    // onMouseLeave={() => this.setState({hovering:false})}
            >
                <img src={logo} width={340}/>
            </Square>
        )
    }
}


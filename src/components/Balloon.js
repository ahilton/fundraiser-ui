
import React, {Component} from 'react';

import posed from "react-pose";

// import { Colors, Icon } from "@blueprintjs/core";
// import {Box, Flex} from "reflexbox";
// import StockCard from "./StockCard";

var logo = require('../img/logo-t.png')

export default class Balloon extends Component {

    render() {

        const Square = posed.div({
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
        })

        return (
            <Square style={this.props.style}
                    initialPose={'bottom'}
                    pose={'top'}
            >
                <img src={logo} width={340}/>
            </Square>
        )
    }
}


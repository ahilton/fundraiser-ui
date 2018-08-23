

import React, {Component} from 'react';

// import { Colors, Icon } from "@blueprintjs/core";
// import {Box, Flex} from "reflexbox";
// import StockCard from "./StockCard";

export default class Thermometer extends Component {

    render() {
        const {handleClick, iconName, style} = this.props
        return (
            <div id="countdown-wrap">
                <div id="goal">$10,000</div>
                <div id="glass">
                    <div id="progress">
                    </div>
                </div>
                <div className="goal-stat">
                    <span className="goal-number">16%</span>
                    <span className="goal-label">Funded</span>
                </div>
                <div className="goal-stat">
                    <span className="goal-number">$1,640</span>
                    <span className="goal-label">Raised</span>
                </div>
                <div className="goal-stat">
                    <span className="goal-number"><div id="countdown"></div></span>
                    <span className="goal-label">Days to Go</span>
                </div>
                <div className="goal-stat">
                    <span className="goal-number">38</span>
                    <span className="goal-label">Sponsors</span>
                </div>
            </div>
        )
    }
}


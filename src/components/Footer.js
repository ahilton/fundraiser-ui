import React, {Component} from 'react';

import { Colors, Icon } from "@blueprintjs/core";
import {Box, Flex} from "reflexbox";

export default class Footer extends Component {

    render() {
        const {lastSystemMessage} = this.props

        //<img src={channelIcon} width={70} height={70} alt={lastEvent.lastUserMessage}/>

        return (
            <div>

                {/*USE A PHANTOM BLOCK TO PREVENT THE FOOTER AFFECTING PAGE FLOW*/}
                <div style={{
                    display:'block',
                    height:150,
                    width:'100%'
                }}/>
                {/*FIXED FOOTER*/}
                <div style={{
                    height:150,
                    position:'fixed', left:0, bottom:0,
                    width:'100%',
                    backgroundColor:'#207EA9',
                    display:'flex',
                    alignItems:'center', // vertical
                    justifyContent: 'center', //horizontal
                }}>

                    <div style={{
                        color:Colors.LIGHT_GRAY4,
                        fontSize: 30,
                        textAlign:'center',
                        paddingLeft: 50,
                        paddingRight: 50,
                    }}
                    >
                        {this.props.children}
                        {lastSystemMessage}
                    </div>
                </div>
            </div>
        )
    }
}
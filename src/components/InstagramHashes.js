import React, {Component} from 'react';

export default class InstagramHashes extends Component {

    render() {
        const {hash} = this.props

        return (
            <div>
                {
                    hash && hash.split(",").map(str =>
                        <h2 key={str + "instaHash"} style={{
                            color: '#ffe166',
                            fontSize: 50,
                            fontWeight: 500,
                            marginBottom:30,
                            letterSpacing:'3px'
                        }}>
                            #{str}
                        </h2>
                    )
                }
            </div>
        )
    }
}

import React, {Component} from 'react';

export default class Progress extends Component {

    render() {
        const {fundraiserTarget, fundraiserPct} = this.props
        console.log('fundraiserTarget, pct:' + fundraiserPct)
        return (
            <div id='progressWidget' style={{
                width: 800
            }}>
                <div className="pt-progress-bar pt-no-animation" style={{
                    height: 60
                }}>

                    <div className="pt-progress-meter" style={{
                        width: fundraiserPct + '%'
                    }}></div>

                </div>
                <div style={{
                    fontSize: 40,
                    textAlign: 'right'
                }}>
                    <div style={{
                        marginTop: 10
                    }} className="softFontBlue">Target
                    </div>
                    <div>
                        <span className="dollar">$</span>
                        <b style={{
                            fontSize: 50
                        }}>{fundraiserTarget.toLocaleString()}</b>
                    </div>
                </div>
            </div>
        )
    }
}


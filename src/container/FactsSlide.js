import React, {Component} from 'react';
import {connect} from 'react-redux'
import posed from "react-pose";

import {getAvaPictureIndex, getFactIndex} from "../redux/funding";
import Slide from "./Slide";

const facts = [
    {
        fact: 'Neuroblastoma is a very rare and aggressive form of childhood cancer that primarily affects the adrenal nerve cells.',

    },
    {
        fact: 'A child with Neuroblastoma dies every 16 hours.',
        source: 'www.neuroblastomacancer.org'
    },
    {
        fact: <div><p>Neuroblastoma is the most common tumor found in ages 1, or younger.</p>
            <p>It is the leading cause of death of children under 5.</p></div>,
        source: 'www.neuroblastomacancer.org'
    },
    {
        fact: '75% of Children diagnosed with stage 4 Neuroblastoma relapse.',
    },
    {
        fact: 'The survival rate for aggressive Neuroblastoma is 50%.',
        source: 'https://childrenscancer.canceraustralia.gov.au/types-childrens-cancers/neuroblastoma'
    },
    {
        fact: '⅓ of the children who do survive have long term side effects from the course of treatment; such as hearing loss, infertility, learning difficulties and growth issues.',
    },
    {
        fact: 'The average age of diagnosis is 2 years old.',
        source: 'https://childrenscancer.canceraustralia.gov.au/types-childrens-cancers/neuroblastoma'
    }
]

class FactsSlide extends Component {

    render() {
        const {index} = this.props

        const fact = facts[index?index:0]

        const Notify = posed.div({
            bottom: {
                scaleY: 1,
                scaleX: 1
            },
            top: {
                scaleY: 1.2,
                scaleX: 1.2,
                transition: {
                    duration: 35000,
                }
            }
        })

        return (
            <Slide>
                <div className='factSlide' style={{width: '75%'}}>
            {/*<Notify*/}
                {/*initialPose={'bottom'}*/}
                {/*pose={'top'}*/}
            {/*>*/}
                <h1 style={{

                }}>
                    {fact.fact}
                </h1>
                    {fact.source && <div className='factSource' style={{


                    }}>
                        <b>Source:</b> {fact.source}
                    </div>}

            {/*</Notify>*/}
                </div>
            </Slide>
        )
    }
}

function mapStateToProps(state) {
    return {
        index: getFactIndex(state)
    }
}

export default connect(mapStateToProps)(FactsSlide);

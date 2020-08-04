import React, { Component } from 'react'
import BT2header from './BT2header'
import BT2carousel from './BT2carousel'
import BT2footer from './BT2footer'

export default class BT2layout extends Component {
    render() {
        return (
            <div>
                <BT2header></BT2header>
                <BT2carousel></BT2carousel>
                <BT2footer></BT2footer>
            </div>
        )
    }
}

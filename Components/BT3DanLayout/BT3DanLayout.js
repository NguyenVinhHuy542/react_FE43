import React, { Component } from 'react'
import BT3Header from './BT3Header'
import BT3Carousel from './BT3Carousel'
import BT3SildeBar from './BT3SildeBar'
import BT3Content from './BT3Content'
import BT3Product from './BT3Product'
import BT3Footer from './BT3Footer'

export default class BT3DanLayout extends Component {
    render() {
        return (
            <div>
                <BT3Header></BT3Header>
                <BT3Carousel></BT3Carousel>
                <BT3SildeBar></BT3SildeBar>
                <BT3Content></BT3Content>
                <BT3Product></BT3Product>
                <BT3Footer></BT3Footer>
            </div>
        )
    }
}

import React, { Component } from 'react'
import BT2jumbotron from './BT2jumbotron'
import BT2page from './BT2page'

export default class BT2carousel extends Component {
    render() {
        return (
            <div className="container">
                <BT2jumbotron></BT2jumbotron>
                <div className="row">
                    <div className="col-3">
                    <BT2page></BT2page>
                    </div>
                    <div className="col-3">
                    <BT2page></BT2page>
                    </div>
                    <div className="col-3">
                    <BT2page></BT2page>
                    </div>
                    <div className="col-3">
                    <BT2page></BT2page>
                    </div>
                </div>
                
            </div>
        )
    }
}

import React, { Component } from 'react'
import BTProDuctItem from './BTProDuctItem';

export default class BTsmartphoneitem extends Component {

    state = {
        spList: [
            {
                image: "./img/sp_iphoneX.png",
                name: "iPhone X",
            },
            {
                image: "./img/sp_note7.png",
                name: "Note 7",
            },
            {
                image: "./img/sp_blackberry.png",
                name: "Blackberry",
            },
            {
                image: "./img/sp_vivo850.png",
                name: "Vivo850",
            },
        ],
    };

    renderSPList = () => {
        return this.state.spList.map((sp, index) => {
            return <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3" key={index}>
                <BTProDuctItem item = {sp} />
            </div>
        })
    }

    render() {
        return (
            <div>
                <div className="row">
                {this.renderSPList()}
                </div>
            </div>

        )
    }
}

import React, { Component } from 'react'

export default class Glassprops extends Component {
    render() {
        const {imgURL, name, price} = this.props.objHUY;

        return (
            <div>
                <div className="card text-left">
                    <img className="card-img-top w-25" src={imgURL} alt="img" />
                    <div className="card-body">
                        <h4 className="card-title">{name}</h4>
                        <p className="card-text">{price}</p>
                        {/* <p className="card-text">{this.props.objHUY.price}</p> */}
                        {/* Stateful Component = (Class)
                        Stateless Component = (function) */}
                    </div>
                </div>

            </div>
        )
    }
}

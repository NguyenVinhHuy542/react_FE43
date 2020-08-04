import React, { Component } from 'react'
import Glassprops from './Glassprops'
import Functionprops from './Functionprops'

export default class Demoprops extends Component {
    render() {

        const car = {
            imgURL: "./img/black-car.jpg",
            name: "HUY",
            price: "30.000$"
        }

        const cacRed = {
            imgURL: './img/red-car.jpg',
            name: 'kendu',
            namSX: 2008
        }
        return (
            <div>
                <h1>DEMO PROPS</h1>
                <Glassprops objHUY = {car}/>
                {/* <Glassprops imgURL= './img/black-car.jpg' name="HUY"/> */}
                {/* Truyền props image cho component Glassprops */}
                <Functionprops objKENDU = {cacRed}/>
            </div>
        )
    }
}

import React, { Component } from 'react'

export default class BTGlassLayout extends Component {
    state = {
        srcImg: './img/Glass/model.jpg'
    }
    changeColor = (number) => {
        // let imgColor = `./img/Glass/g${number}.jpg`
        let imgModel = './img/Glass/model.jpg'
        let imgColor = `./img/Glass/v${number}.png`
    }

    render() {
        return (
            <div>
                     <div className="container-fluid">
                     
                    <div className="row mt-5">
                       
                        <div className="col-6">
                        <img className="w-80" src={this.state.srcImg} alt="123"></img>
                        </div>

                        <div className="col-6">
                            <div className="row-1">
                            <div className="col-4">
                                    <button className='btn text-white' style={{ backgroundColor: 'black' }} 
                                    onClick={() => {this.changeColor('1');}}>Silver</button></div>

                                {/* <div className="col-4"><button className='btn text-white' style={{ backgroundColor: 'red' }} onClick={() => {
                                    this.changeColor('red');
                                }}>Red-car</button></div>
                                <div className="col-4">
                                    <button className='btn text-white' style={{ backgroundColor: 'silver' }} 
                                    onClick={() => {this.changeColor('silver');}}>Silver-car</button></div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

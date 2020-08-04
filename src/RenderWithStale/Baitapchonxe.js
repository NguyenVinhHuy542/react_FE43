import React, { Component } from 'react'

export default class Baitapchonxe extends Component {
    state = {
        srcImg: './img/black-car.jpg'
    }
    changeColor = (color) => {
        let imgColor = `./img/${color}-car.jpg`
    }

    render() {
        return ( 
            <div>
                {/* // B1: Dàn Layout (dựng giao diện) */}
                <div className="container-fluid">
                    <div className="row mt-5">
                        <div className="col-6">
                            <img className="w-100" src={this.state.srcImg} alt="123"></img>
                        </div>
                        <div className="col-6">
                            <div className="row">
                                <div className="col-4" ><button className='btn text-white' style={{ backgroundColor: 'black' }} onClick={() => {
                                    this.changeColor('black');
                                }}>Black-car</button></div>
                                <div className="col-4"><button className='btn text-white' style={{ backgroundColor: 'red' }} onClick={() => {
                                    this.changeColor('red');
                                }}>Red-car</button></div>
                                <div className="col-4"><button className='btn text-white' style={{ backgroundColor: 'silver' }} onClick={() => {
                                    this.changeColor('silver');
                                }}>Silver-car</button></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* // B2: Xác định nguồn dữ liệu thay đổi => tổ chức lưu trữ
            // B3: Xử lý chức năng */}
            </div>

        )
    }




}
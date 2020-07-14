// rcc , rfc : Bung ra phía dưới
// RCC: tạo ra class(lớp đối tượng):2 thành phần (thuộc tính và phương thức)
// Kế thừa từ component :
import React, { Component } from 'react'
import BTHeader from './BTHeader'
import BTbackground from './BTbackground'
import BTsmartphone from './BTsmartphone'
import BTlaptop from './BTlaptop'
import BTpromo from './BTpromo'

export default class Baitaplayout extends Component {
    // Nội dung react component chứa phương thức "render"
    // Chỉ dùng 1 thẻ div bao phủ
    render() {
        return (
            <div>
                <BTHeader></BTHeader>
                <BTbackground></BTbackground>
                <BTsmartphone></BTsmartphone>
                <BTlaptop></BTlaptop>
                <BTpromo></BTpromo>
            </div>
        )
    }
}

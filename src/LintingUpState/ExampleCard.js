import React, { Component } from 'react'
import Data from './Data.json'
import ProductList from './ProductList'
import Card from './Card'

export default class ExampleCard extends Component {
    // Điều kiện lưu trữ State:
    // 1. Chứa giao diện được bingding từ stata(trực tiếp hoặc gián tiếp)
    // 2. Chứa nút xử lý làm thay đổi state đó (trực tiếp hoặc gián tiếp)
    state = {
        proList: Data,
        proSelected: null,
        cardList: []
    }
    handleSelectpro = (pro) => {
        this.setState({
            proSelected: pro,
        })
    }
    handleBuy = (card) => {
        //Tạo cardLst mới
        let cardLstUpdate = [...this.state.cardList];

        //Tìm vị trí của phần tử trong mảng
        let index = cardLstUpdate.findIndex((item) => item.maSP === card.maSP);

        if (index >= 0) {
            //Tìm thấy
            cardLstUpdate[index].soLuong += 1;
        } else {
            //Không tìm thấy
            card.soLuong = 1;
            cardLstUpdate = [...cardLstUpdate, card];
        }

        this.setState({
            cardList: cardLstUpdate
        })
    }

    handleDelete = (card) => {
        /*
      B1: Tìm vị trí
      B2: Cắt ra khỏi mảng
      B3: setState
      */
        //Tạo mảng mới để cắt phần tử
        let cardLstUpdate = [...this.state.cardList];
        //Tìm vị trí của phần tử trong mảng
        let index = cardLstUpdate.findIndex((item) => item.maSP == card.maSP);
        if (index >= 0) {
            //Tìm thấy thì xóa
            cardLstUpdate.splice(index, 1);
            //xét mảng cũ thành mảng mới
            this.setState(
                { cardList: cardLstUpdate }
            );
        }


    }

    render() {
        let objItem = this.state.proSelected;
        return (
            <div>
                <div>
                    <div className="container">
                        <div>
                            <h2>Card</h2>
                            <Card cardList={this.state.cardList} handleDelete={this.handleDelete} />
                        </div>
                        <ProductList handleBuy={this.handleBuy} handleSelectpro={this.handleSelectpro} proList={this.state.proList} />
                        {
                            this.state.proSelected ? (<div className="row">
                                <div className="col-sm-5">
                                    <img className="img-fluid" src={objItem.hinhAnh} />
                                </div>
                                <div className="col-sm-7">
                                    <h3>Thông số kỹ thuật</h3>
                                    <table className="table">
                                        <tbody>
                                            <tr>
                                                <td>Màn hình</td>
                                                <td>{objItem.manHinh}</td>
                                            </tr>
                                            <tr>
                                                <td>Hệ điều hành</td>
                                                <td>{objItem.heDieuHanh}</td>
                                            </tr>
                                            <tr>
                                                <td>Camera trước</td>
                                                <td>{objItem.cameraTruoc}</td>
                                            </tr>
                                            <tr>
                                                <td>Camera sau</td>
                                                <td>{objItem.cameraSau}</td>
                                            </tr>
                                            <tr>
                                                <td>RAM</td>
                                                <td>{objItem.ram}</td>
                                            </tr>
                                            <tr>
                                                <td>ROM</td>
                                                <td>{objItem.rom}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            ) : null
                        }

                    </div>
                </div>

            </div>
        )
    }
}


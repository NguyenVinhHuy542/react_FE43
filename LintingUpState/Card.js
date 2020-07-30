import React, { Component } from 'react'

export default class Card extends Component {
    renderLstCard = (card) => {
        let { cardList, handleDelete, tangGiamSoLuong } = this.props;
        return cardList.map((card, index) => {
            // let soLuong = 0;
            // //Đếm số phần tử có cùng mã trong cardList
            // cardList.forEach(element => {
            //     if (element.maSP == card.maSP)
            //         soLuong++;
            // });
            // let vt = lstCard.findIndex(item => item.maSP == card.maSP);
            // if (vt < 0) {
            //     lstCard = [...lstCard, card];
            return (
                <tr key={index}>
                    <td>{card.maSP}</td>
                    <td>
                        <img src={card.hinhAnh} alt="asda" style={{ width: 100 }} />
                    </td>
                    <td>{card.tenSP}</td>
                    <td>{card.giaBan.toLocaleString()}</td>
                    <td>
                        <button className="btn btn-info" onClick ={()=>{
                            tangGiamSoLuong(card.maSP, false);
                        }}>-</button><span className="mx-2">{card.soLuong}</span><button className="btn btn-info" onClick={()=>{
                            tangGiamSoLuong(card.maSP, true);
                        }}>+</button>
                    </td>
                    <td>{(card.soLuong * card.giaBan).toLocaleString()}</td>
                    <td><button className="btn btn-danger" onClick={() => {
                        handleDelete(card);
                    }}>xóa</button></td>
                </tr>
            )
            // }

        })
    }
    tinhTongTien = () =>{
        return this.props.cardList.reduce((tongTien, spGH, index) =>{
            return tongTien += spGH.soLuong * spGH.giaBan;
        }, 0).toLocaleString();
    }
    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Hình Ảnh</th>
                            <th>Tên sảm phẩm</th>
                            <th>Giá bán</th>
                            <th>số lượng</th>
                            <th>thành giá</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderLstCard()}
                    </tbody>
                    <tfoot>
                        <tr>
                           <td colSpan = "5"></td>
                           <td>Tổng tiền</td>
                           <td>
                               {this.tinhTongTien()}
                           </td>
                        </tr>
                    </tfoot>
                </table>

            </div>
        )
    }
}

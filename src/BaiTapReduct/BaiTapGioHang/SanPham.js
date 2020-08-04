import React, { Component } from 'react'
import { connect } from 'react-redux';

class SanPham extends Component {
    render() {
        let { sanPham } = this.props;
        return (
            <div className="card text-leftca">
                <img style={{ height: 350 }} className="card-img-top" src={sanPham.hinhAnh} alt="123" />
                <div className="card-body">
                    <h4 className="card-title">{sanPham.tenSP}</h4>
                    <p className="card-text">{sanPham.giaBan}</p>
                    <button onClick={() => {
                        this.props.xemChiTiet(sanPham);
                    }} className="btn btn-primary"> Xem chi tiết</button>
                </div>
            </div>
        )
    }
}

//Hàm lấy giá trị calllback từ store về để đưa dữ liệu lên redux
const mapDispatchToPros = (dispatch) => {
    return {
        //Định nghĩa 1 props cho component này là 1 hàm
        xemChiTiet: (sanPham) => {
            //Dùng hàm dispatch của redux đưa sản phẩm lên tất cả reducer
            console.log('Sản phẩm được click: ', sanPham);
            const action = {
                type: 'Xem_Chi_Tiet',//Giá tị bắt buộc phải có
                // sanPham : sanPham
                //Viết gọn
                sanPham
            }
            //Dùng hàm dispatch từ redux trả ra => Đưa dữ liệu lên reducer xử lý
            dispatch(action);
        }
    }
}

export default connect(null, mapDispatchToPros)(SanPham)
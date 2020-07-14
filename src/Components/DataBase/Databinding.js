import React, { Component } from 'react'
// import src from '*.bmp';
import styleDataBinding from './DataBinding.module.css'

export default class Databinding extends Component {
    sanPham = {
        ma: 1,
        tenSP: "Iphone X",
        gia: 1000,
        hinhAnh: `http://picsum.photos/200/300`
    }

    // Phương thức
    renderThongTin = () => {
        return (
            <div className="container">
                <div className="w-25">
                    <div className="card text-left">
                        <img className="card-img-top" src={this.sanPham.hinhAnh} alt={this.sanPham.hinhAnh} />
                        <div className="card-body">
                            <h4 className={`${styleDataBinding.header} card-title`}>{this.sanPham.tenSP}</h4>
                            <p className="card-text">{this.sanPham.gia}</p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
    render() {
        let title = "CYBERHUY";
        let srcImg = "http://picsum.photos/200/300";
        let hocVien = {
            ma: 1,
            ten: "Nguyễn Văn A",
            tuoi: 20
        }
        // Binding dữ liệu là hàm
        const renderImg = () => {
            // return về component(jsx): Nội dung hàm phải trả về 1 số, chuỗi, hoặc thẻ html, hoặc component có duy nhất 1 thẻ bao phủ
            return (
                <div>
                    <img src="http://picsum.photos/200/300" />
                </div>
            )
        }
        return (
            <div>

                <div>
                    {this.renderThongTin()}
                </div>


                <h1 id="title">{title}</h1>
                <img src={srcImg} alt={srcImg} />
                <div className="card text-left w-25">
                    <img className="card-img-top" src={srcImg} alt={srcImg} />
                    <div className="card-body">
                        <h4 className="card-title">Ho ten: {hocVien.ten}</h4>
                        <p className="card-text">Tuoi: {hocVien.tuoi}</p>
                    </div>
                </div>
                <div className="container">
                    {renderImg()}
                </div>
            </div>

        )
    }
}

import React, { Component } from 'react'
import Form_validation from './Form_validation'
import { connect } from 'react-redux'

class QLSV extends Component {
    renderTable = () => {
        return this.props.mangNguoiDung.map((nguoiDung, index) => {
            return <tr key={index}>
                <td>{nguoiDung.taiKhoan}</td>
                <td>{nguoiDung.matKhau}</td>
                <td>{nguoiDung.hoTen}</td>
                <td>{nguoiDung.email}</td>
                <td>{nguoiDung.soDt}</td>
                <td>{nguoiDung.maNhom}</td>
                <td></td>
            </tr>
        })
    }
    render() {
        return (
            <div className="container">
                <Form_validation />
                <table className="table">
                    <thead>
                        <tr>
                            <th>Tài Khoản</th>
                            <th>Mật Khẩu</th>
                            <th>Họ Tên</th>
                            <th>Email</th>
                            <th>Số Điện thoại</th>
                            <th>Mã Nhóm</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTable()}
                    </tbody>
                </table>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        mangNguoiDung: state.QLSVReducer.mangNguoiDung
    }
}
// function mapStateToProps = (state) =>{}
export default connect(mapStateToProps)(QLSV);
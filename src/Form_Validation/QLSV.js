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
                <td>
                    <button onClick={() => {
                        this.props.dispatch({ type: 'CHINH_SUA', nguoiDung })
                    }} className="btn btn-primary">Chỉnh sửa</button>
                    <button onClick={() => {
                        this.props.dispatch({ type: 'XOA', index })
                    }} className="btn btn-danger">XÓA</button>
                </td>
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
                            <td>Tài Khoản</td>
                            <td>Mật Khẩu</td>
                            <td>Họ Tên</td>
                            <td>Email</td>
                            <td>Số Điện tdoại</td>
                            <td>Mã Nhóm</td>
                            <td>

                            </td>
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
        mangNguoiDung: state.QLSVReducer.mangNguoiDung,

    }
}
// function mapStateToProps = (state) =>{}
export default connect(mapStateToProps)(QLSV);
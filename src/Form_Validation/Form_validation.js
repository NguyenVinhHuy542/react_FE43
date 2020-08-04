import React, { Component } from 'react'
import {connect} from 'react-redux'
import {THEM_NGUOI_DUNG} from '../redux/constants/QLSVConst'

class Form_validation extends Component {
    state = {
        values: {
            taiKhoan: '',
            hoTen: '',
            matKhau: '',
            soDt: '',
            email: '',
            maNhom: '',
        },
        errors: {
            taiKhoan: '',
            hoTen: '',
            matKhau: '',
            soDt: '',
            email: '',
            maNhom: '',
        }

    }
    handleChange = (event) => {
        // let value = event.target.value;
        // let name = event.target.name;
        let { name, value} = event.target;
        // Cac thuộc tính nằm trên thẻ gọi là Attribute
        // cách thuộc tính của đối tượng thẻ sau khi dom gọi là property
        let label = event.target.getAttribute('label');
        let type = event.target.getAttribute('type');
        console.log("TaiKHoan", value);
        // Tach gia tri value va errors cuar state ra xuwr lys rieneg
        let newValue = { ...this.state.values, [name]: value };
        
        //    Xử lý error
        // Kiểm tra rỗng
        let errorMess = '';
        if (value.trim() === '') {
            errorMess = label + ' Không được bỏ trống!';
        }
        // Kiểm tra nhập số
        if(type === 'phone') {
            let regexNumber = /^[0-9]+$/;
            if(!regexNumber.test(value)){
                errorMess += `\n ${label} Chỉ được phép nhập số`;
            }
        }
        if(type === 'email') {
            let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(!regexEmail.test(value)) {
                errorMess = `${label} Không hợp lệ!`
            }
        }
        

        let newErrors = { ...this.state.errors, [name]: errorMess };
        this.setState({
            values: newValue,
            errors: newErrors
        }, () => {
            console.log('state', this.state)
        })
    }

    handleSubmit = (event) => {
        // Ngăn sự kiện reload lại form
        event.preventDefault();
        let valid = true;
        let {values, errors} = this.state;
        // duyệt các trường value của state
        for (let key in values){
            if(values[key].trim()=== '') {
                alert('Dữ liệu không hợp lệ!');
                return;

            }
        }
        // Duyệt các trường errors cả state
        for (let key in errors){
            if (errors[key].trim()!== "") {
                alert ('Dữ liệu không hợp lệ!')
                return;
            }
        }
        // Submit lên reducer thêm người dùng vào mảng người dùng
        this.props.dispatch({
            type: THEM_NGUOI_DUNG,
            nguoiDung: this.state.values,
        })
    }

    render() {
        return (
            <div className="card text-white bg-light text-dark">
                <div className="card-header text-center font-weight-bold display-4 text-light bg-dark">FORM DANG KY</div>
                <div className="card-body">
                    <form onSubmit={this.handleSubmit} className="container-fluid">
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <p>Tai Khoan</p>
                                    <input label="Tài Khoản" className="form-control" name="taiKhoan" onChange={this.handleChange}></input>
                                    <p className="text text-danger">{this.state.errors.taiKhoan}</p>
                                </div>
                                <div className="form-group">
                                    <p>Mat Khau</p>
                                    <input label="Mật Khẩu" className="form-control" name="matKhau" onChange={this.handleChange}></input>
                                    <p className="text text-danger">{this.state.errors.matKhau}</p>
                                </div>
                                <div className="form-group">
                                    <p>So Dien Thoai</p>
                                    <input type="phone" label="Số Điện Thoại" className="form-control" name="soDt" onChange={this.handleChange}></input>
                                    <p className="text text-danger">{this.state.errors.soDt}</p>
                                </div>


                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <p>Ho Ten</p>
                                    <input label="Họ Tên" className="form-control" name="hoTen" onChange={this.handleChange}></input>
                                    <p className="text text-danger">{this.state.errors.hoTen}</p>
                                </div>
                                <div className="form-group">
                                    <p>Email</p>
                                    <input type="email" label="Ê meo" className="form-control" name="email" onChange={this.handleChange}></input>
                                    <p className="text text-danger">{this.state.errors.email}</p>
                                </div>
                                <div className="form-group">
                                    <p>Ma Nhom</p>
                                    <input label="Nhõm Má" className="form-control" name="maNhom" onChange={this.handleChange}></input>
                                    <p className="text text-danger">{this.state.errors.maNhom}</p>
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-primary" onClick={()=>{
                                       
                                    }}>Dang Ky</button>
                                </div>
                            </div>

                        </div>

                    </form>

                </div>
            </div>


        )
    }
}
export default connect(null) (Form_validation);
import React, { Component } from 'react'
import { connect } from "react-redux";
import {tangGiamAction} from '../../redux/ACTION/GameBauCuaAction'

class DanhSachCuoc extends Component {
    renderDSCuoc = (lstCuoc) => {
        return lstCuoc.map((item, index) => {
            return (
                <div className="card col-4" key={index}>
                    <img className="card-img-top" src={item.hinhAnh} alt="Card cap" style={{ height: 200 }} />
                    <div className="card-body">
                        <h5 className="card-title" />
                        <div className="d-flex justify-content-around align-items-center">
                            <button className="btn btn-info" onClick={() => {
                                this.props.tangGiamMucCuoc(item.id, false);
                            }}>-</button>
                            <span>{item.giaCuoc}$</span>
                            <button className="btn btn-info" onClick={() => {
                                this.props.tangGiamMucCuoc(item.id, true);
                            }}>+</button>
                        </div>
                    </div>
                </div>
            )
        });
    }
    render() {
        const { danhSachCuoc } = this.props;
        return (
            <div className="bau-cua__chon">
                <div className="bau-cua__bang row">
                    {this.renderDSCuoc(danhSachCuoc)}
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        //Key là props of component -- value là state of store
        danhSachCuoc: state.GameBauCuaReducer.danhSachCuoc,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        //Key là props of component -- value là method send action to reducer
        tangGiamMucCuoc: (id, tangGiam) => {
            // const actions = {
            //     type: "TANG_GIAM",
            //     id,
            //     tangGiam
            // };
            dispatch(tangGiamAction(id,tangGiam));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DanhSachCuoc);
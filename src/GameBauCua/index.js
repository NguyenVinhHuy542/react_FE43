import React, { Component } from 'react'
import "./style.css";
import DanhSachCuoc from './DanhSachCuoc';
import XucXac from "./XucXac";
import { connect } from "react-redux";
class GameBauCua extends Component {
    render() {
        const { tongTien, ChoiGame } = this.props;
        return (
            <div className="bau-cua">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="bau-cua__tien font-weight-bold">Tổng Tiền : {tongTien} $</div>
                        <h2 className="text-center text-danger">Bầu Cua</h2>
                        <div><button className="btn btn-info" onClick={() => {
                            ChoiGame();
                        }}>Chơi Game</button></div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-lg-7">
                            <DanhSachCuoc />
                        </div>
                        <div className="col-md-12 col-lg-5">
                            <XucXac />
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}


const mapStateToProps = (state) => {
    return {
        //Key là props of component -- Value: là state of store
        tongTien: state.GameBauCuaReducer.tongTien,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        ChoiGame: () => {
            const actions = {
                type: "CHOI_GAME",
            };
            dispatch(actions);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameBauCua)
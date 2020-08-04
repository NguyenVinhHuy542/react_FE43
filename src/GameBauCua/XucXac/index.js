import React, { Component } from 'react'
import { connect } from "react-redux";
class XucXac extends Component {
    renderXucXac = (lstXucXac) => {
        return lstXucXac.map((item, index) => {
            return (
                <div className={`bau-cua__xoay bau-cua__xoay--${1 + index}`} key={index}>
                    <img src={item.hinhAnh} alt="hinhanh" />
                </div>
            )
        })
    }
    render() {
        const { xucXac } = this.props;
        return (
            <div className="bau-cua__do w-100 h-100">
                <img src="./img/dia.png" alt="hinh" className="w-100 h-100" />
                {this.renderXucXac(xucXac)}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        xucXac: state.GameBauCuaReducer.xucXac,
    }
}
export default connect(mapStateToProps, null)(XucXac);

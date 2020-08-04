import React, { Component } from 'react'
import { connect } from "react-redux";
class DieuKhien extends Component {

    renderXucXac = () => {
        return this.props.xucXac.map((item, index) => {
            return (
                <span key={index}><i className={item.classes} style={{ color: 'white', fontSize: 150 }} /></span>
            )
        })
    }

    render() {
        return (
            <div className="xi-ngau__control row text-center mt-4">
                <div className="col-4">
                    <button className="btn btn-lg rounded-circle" onClick={() => {
                        this.props.chonTaiXiu(true);
                    }} style={{ overflow: 'hidden' }}>
                        <img src="./img/tai.PNG" alt="tai" />
                    </button>
                </div>
                <div className="col-4 d-flex align-items-center justify-content-around">
                    {this.renderXucXac()}
                    {/* <span><i className="fa fa-dice-one" style={{ color: 'white', fontSize: 150 }} /></span>
                    <span><i className="fa fa-dice-two" style={{ color: 'white', fontSize: 150 }} /></span>
                    <span><i className="fa fa-dice-six" style={{ color: 'white', fontSize: 150 }} /></span> */}
                </div>
                <div className="col-4">
                    <button className="btn btn-lg rounded-circle" onClick={() => {
                        this.props.chonTaiXiu(false);
                    }} style={{ overflow: 'hidden' }}>
                        <img src="./img/xiu.PNG" alt="xiu" />
                    </button>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        xucXac: state.GameTaiXiuReducer.xucXac,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        chonTaiXiu: (taiXiu) => {
            dispatch({ type: "TAI_XIU", taiXiu })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DieuKhien)

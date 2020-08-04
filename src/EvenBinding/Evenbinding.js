import React, { Component } from 'react'
// rcc
export default class Evenbinding extends Component {
    handleClick = () => {
        alert("Hello fe 43");
    }
    showMessege = (mess) => {
        alert('hello' + mess)
    }
    render() {
        return (
            // Cách 1: truyền callback funtion xử lý sự kiện
            <div>
                <h3>Cách 1: truyền callback funtion xử lý sự kiện</h3>
                <button onClick={this.handleClick}>Click me</button>

                <br></br>
                <h3>Cách 2: Dùng arrowfunction</h3>
                {/* Cách 2: Ưu tiên làm cách này */}
                <button onClick={() => { this.handleClick() }}>Click YOU</button>
                <br></br>
                <button onClick={() => {
                    this.showMessege('Cybersoft');
                }}>Show ME</button>
                <br></br>
                <h3>DÙNG kiểu callback</h3>
                {/* Dùng kiểu callback */}
                <button onClick={this.showMessege.bind(this, 'cybersoft')}>HEKK me</button>
                
            </div>
        )
    }
}

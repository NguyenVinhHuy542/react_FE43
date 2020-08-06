import React, { Component } from 'react'

export default class ReactLifeCycle extends Component {
    constructor(props) {
        super(props);
        console.log('constructor');
        this.state = {
            number:1
        }
    }
    static getDerivedStateFromProps(props, state) {//Props mới và state hiện tại 
        return null; //Trả về state mới
    }
    render() {
        return (
            <div>
                {this.state.number}
                <button onClick={()=>{this.setState({number: this.state.number+1})}}>+</button>
            </div>
        )
    }

    // Chạy sau khi render và chỉ chạy 1 lần duy nhất
    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState) {//preProps : là props mới, prevState : state mới
        // Chạy sau render và chạy khi state hoặc props thay đổi
        // Lưu ý: không setState trong life cycle này sẽ đi vào lập vô tận

    }

    componentWillMount() {
        // Chạy khi component bị xóa khỏi giao diện
    }
}
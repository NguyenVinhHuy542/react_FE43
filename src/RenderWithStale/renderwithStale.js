import React, { Component } from 'react'

export default class renderwithStale extends Component {

    // this.stale : THuộc tính chứa những giá trị thay đổi khi người dùng thap tác trên giao diện
    // Thuộc tính có sẵn của COMPONENT
    state = {
        isLogin : false
    }

    // isLogin = false;
    userName = 'khải';
    
    renderContent = () => {
        if(this.state.isLogin){
            return <p>Hello {this.userName}</p>
        }
        return <button onClick={()=>
        {this.login();}}>Đăng Nhập</button>
    }
    login = () => {
        // this.state.isLogin = true;
        // console.log(this.state.isLogin);
        // this.render();
        let newState = {
            isLogin : true
        }
        // Phương thúc this.setState là 1 phương thúc có sẵn của component làm 2 nhiệm vụ, 1 là thay đổi giá trị state, 2 là gọi this.render lại giao diện
        // this.setState là 1 phương thức bất đồng bộ
        this.setState(newState,()=>{
            console.log(this.state)
        })
        
    }

    render() {
        return (
            <div>
                {/* {this.isLogin ? <p>Hello {this.userName}</p> : <button>Đăng Nhập</button>} */}
                {this.renderContent()}
            </div>
        )
    }
}

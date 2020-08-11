import React, { Component } from 'react'
import ChildComponent_Pure from './ChildComponent_Pure'
import ChildComponent from './ChildComponent'

export default class PureComponentDemo extends Component {
    state ={
        number:1,
        user: {
            id:1,
            name: 'Tèo'
        }
    }
    render() {
        return (
            <div className="container">
                <h1 className="display-4">{this.state.number}</h1>
                <button className="display-4 btn btn-success" onClick={()=>{
                    this.setState({
                        number: this.state.number + 1
                    })
                }}>+</button>
               
                <button className="display-4 btn btn-success m-4" onClick={()=>{
                       let newUser = this.state.user;
                       newUser.name ='Huy';
                       this.setState({
                           user: newUser
                       })
                        

                }}>Change Name</button>
                <h2>PureComUser: {this.state.user.name}</h2>
                {/* <ChildComponent_Pure user={this.state.user}/> */}
                <ChildComponent user={{...this.state.user}}/>
            </div>
        )
    }
}

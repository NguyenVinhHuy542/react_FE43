import React, { Component } from 'react'
import Product from './Product'

export default class ProductList extends Component {
    
    renderProList = () => {
        let {proList, handleSelectpro, handleBuy} = this.props;
        return proList.map((item, index) => {
            return <div className="col-sm-4" key={index}>
                <Product handleSelectpro={handleSelectpro} item={item} handleBuy ={handleBuy}/>
            </div>
        })

    }
    render() {

        return (
            <div className="row">
                {this.renderProList()}
            </div>
        )
    }
}

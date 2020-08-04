import React, { Component } from 'react'

export default class RenderMap extends Component {

    productList = [
        {id:1, name: 'Iphone6', price: 1000},
        {id:2, name: 'Iphone7', price: 2000},
        {id:3, name: 'Iphone8', price: 3000}
    ]
    renderProductList = () => {
    //   CÁCH 1: Rút gọn
        return this.productList.map((product, index)=>{
            return <tr key={index}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td><button className="btn btn-danger">XÓA</button></td>
                </tr>
        })
        

        // CÁCH 3: DÙNG MAP
        // renderProductList = () => {
        //     let arrProductJSX = [];
        //     // CÁCH 1: Dùng MAP
        //     arrProductJSX = this.productList.map((product, index)=>{
        //         return <tr key={index}>
        //                 <td>{product.id}</td>
        //                 <td>{product.name}</td>
        //                 <td>{product.price}</td>
        //                 <td><button className="btn btn-danger">XÓA</button></td>
        //             </tr>
        //     })
        //     return arrProductJSX;

        // CÁCH 2:
        // for(let i=0; i<this.productList.length;i++){
        //     // Duyệt qua mảng lấy ra từng phần tử
        //     let product = this.productList[i];
        //     // từ product tạo ra thẻ tr
        //     let trProduct =<tr key={i}>
        //         <td>{product.id}</td>
        //         <td>{product.name}</td>
        //         <td>{product.price}</td>
        //         <td><button className="btn btn-danger">XÓA</button></td>
        //     </tr>;
        //     // Push vào mảng kết quả
        //     arrProductJSX.push(trProduct);
        // }
        // return arrProductJSX; 
        // // [<tr>........</tr>,<tr>.......</tr>]
       
    }
    
    render() {
        return (
            <div>
                <h3>Product list</h3>
               <table className='table'>
                   <thead>
                       <tr>
                           <td>id</td>
                           <td>Name</td>
                           <td>Price</td>
                           <th></th>
                       </tr>
                   </thead>
                   <tbody>
                       {this.renderProductList()}
                   </tbody>
               </table>
            </div>
        )
    }
}

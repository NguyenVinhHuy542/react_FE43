import React, { Component } from 'react'

export default function Functionprops(props) {
        
        return (
            <div>
                <h2>Stateless Component</h2>
                <div className="card text-left w-25">
                    <img className="card-img-top" src={props.objKENDU.imgURL} alt />
                    <div className="card-body">
                        <h4 className="card-title">{props.objKENDU.name}</h4>
                        <p className="card-text">{props.objKENDU.namSX}</p>
                    </div>
                </div>

            </div>
        )
    
}

import React, { Component } from 'react'

export default class Newsitem extends Component {

    render() {
        let {title,discription,imageurl,newsurl} = this.props;
        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <img src={imageurl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{discription}</p>
                        <a href={newsurl} className="btn btn-primary">READ FULL NEWS</a>
                    </div>
                </div>
            </div>
        )
    }
}
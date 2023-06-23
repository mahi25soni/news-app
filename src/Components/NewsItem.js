import React, { Component } from 'react'
import '../index.css'

export class NewsItem extends Component {
  render() {
    // let { title , description } = this.props // If you don't write like this, then you have to "this." for every props
    // style should be packed as object

    let { title , description , imageUrl, newsUrl, publishDate } = this.props
    return (
        <>
        <div className="card" style={{width: "25%", height: "fit-content", margin: "20px"}}> 
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <img className="card-img-top my-2" src={imageUrl} alt="Card  cap"/>
                <p className="card-text">{publishDate}</p>
                <p className="card-text">{description}...</p>
                <a href={newsUrl} target='_blank' rel="noopener noreferrer" className="btn btn-dark">Details</a>
            </div>
        </div>      
        </>
    )
  }
}

export default NewsItem
import React, { Component } from "react";
import "../index.css";

export class NewsItem extends Component {
  render() {


    let { title, description, imageUrl, newsUrl, publishDate, writer } =
      this.props;
    return (
      <>
        <div
          className="card"
          style={{ width: "100%", height: "fit-content", margin: "20px" }}
        >
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <img className="card-img-top my-2" src={imageUrl} alt="Card  cap" />
            <p style={{ fontWeight: "lighter", fontStyle: "italic" }}>
              {writer}
            </p>
            <p className="card-text">{description}...</p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-dark"
            >
              Details
            </a>
            <p style={{ display: "inline", float: "right" }}>{publishDate}</p>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;

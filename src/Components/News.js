import React, { Component } from "react";
import NewsItem from "./NewsItem";
import "../index.css";
import everything from "../SampleNews.json";
import PropTypes from "prop-types";
import Buffer from "./Buffer";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string,
  };


  constructor() {
    super(); 

    this.state = {
      articles: everything.articles,
      loading: false,
      page: 1,
      date: "nothign",
    };
  }


  async gettingArticle() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0e0a06301e4643249c27fefee1bd8940&pageSize=${this.props.pageSize}&page=${this.state.page}`;
    document.title = `NewsApp - ${this.props.category}`
    this.setState({ loading: true });
    const data = await fetch(url); // returns a promise
    const realData = await data.json(); //
    this.setState({
      articles: realData.articles,
      total: realData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    this.gettingArticle();
  }

  fetchMoreData = async () => {
    this.setState({
      page : this.state.page + 1
    })

    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0e0a06301e4643249c27fefee1bd8940&pageSize=${this.props.pageSize}&page=${this.state.page}`;

    this.setState({ loading: true });
    const data = await fetch(url); // returns a promise
    const realData = await data.json(); //
    this.setState({
      articles: this.state.articles.concat(realData.articles),
      total: realData.totalResults,
      loading: false,
    });

  }

  render() {
    let defaultImageUrl = "https://images.mktw.net/im-803867/social";
    return (
      <>
        {this.state.loading && <Buffer></Buffer>}

          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.page <= (this.state.total/this.props.pageSize)}
            loader={<Buffer></Buffer>}
          >
        <div className="container">
            <div className="row">
              {this.state.articles.map((data, key) => (
                  <div className="col-md-4">
                    <NewsItem
                      key={key}
                      title={data.title ? data.title.slice(0, 40) : ""}
                      description={
                        data.description ? data.description.slice(0, 120) : ""
                      }
                      imageUrl={
                        data.urlToImage ? data.urlToImage : defaultImageUrl
                      }
                      newsUrl={data.url}
                      publishDate={data.publishedAt.split("T")[0]}
                      writer={data.author}
                    />
                  </div>
                ))}
            </div>
        </div>
          </InfiniteScroll>
      </>
    );
  }
}
export default News;

import React, { Component } from 'react'
import NewsItem from './NewsItem'
import "../index.css"
import everything from '../SampleNews.json'

export class News extends Component {
  /// pehle constructor, fir render, then componentDidMount

  constructor(){
    super()   // contructor should always be used with this 'super'
    // this.state mei ham saare state ko initialize karte hai, and this.useState mei unko change
    
    this.state = {
      articles : everything.articles,
      loading : false,
      page : 1
    }
  }

  async componentDidMount () {
    this.gettingArticle(1)
  }

  async gettingArticle(page){
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=0e0a06301e4643249c27fefee1bd8940&pageSize=12&page=${page}`

    const data = await fetch(url) // returns a promise
    const realData = await data.json() // 

    this.setState({
      articles : realData.articles,
      total : realData.totalResults
    })
  }
  changePage(getting){
    if(Math.ceil(this.state.total/12) < this.state.page+1){

    }
    else{
      if(getting === "reduce"){
        this.gettingArticle(this.state.page - 1)
        this.setState({
          page : this.state.page - 1
        })
      }
      else {
        this.gettingArticle(this.state.page + 1)
        this.setState({
          page : this.state.page + 1
        })
      }
    };
  }
  
  // You can't use this.state.variable in render, I dont knwo why
    render() {
    let defaultImageUrl = "https://images.mktw.net/im-803867/social"
    return (
        <>

      <div className='container justify-content-between' style={{display : 'flex', flexWrap: 'wrap'}}>
      {this.state.articles.map((data, key) => (
              <NewsItem key= {key} title={data.title?data.title.slice(0,40):""} description={data.description?data.description.slice(0,120):""} imageUrl={data.urlToImage?data.urlToImage:defaultImageUrl} newsUrl = {data.url}/>
      ))}
      </div>

      <div className='container d-flex justify-content-between my-3'>
        <button disabled={this.state.page <= 1} className="btn btn-primary" onClick={() => this.changePage("reduce")}>&larr; Previous</button>
        <button className="btn btn-primary" onClick={() => this.changePage("add")}>Next &rarr;</button>
      </div>
      {/* <NewsItem/> */}

      </>
    )
  }
}
// 0e0a06301e4643249c27fefee1bd8940
export default News
import React, { Component } from 'react'
import Newsitem from './Newsitem'

export default class News extends Component {
    articles = [{
        "source": {
          "id": null,
          "name": "HuffPost"
        },
        "author": "Mary Papenfuss",
        "title": "Bumble, Match, Uber, Lyft Step Up To Help Women Battle Radical Texas Anti-Abortion Law - HuffPost",
        "description": "The CEO of Dallas-based Match said she was “shocked that I now live in a state where women’s reproductive laws are more regressive than most of the world.”",
        "url": "https://www.huffpost.com/entry/texas-anti-abortion-law-bumble-match-lyft-uber_n_6132baffe4b04778c0051723",
        "urlToImage": "https://img.huffingtonpost.com/asset/6132d4da280000330271f137.jpeg?cache=rxsjpf5fb9&ops=1778_1000",
        "publishedAt": "2021-09-04T02:56:00Z",
        "content": "Texas-based Bumble and the CEO of the Match dating-app company, along with Uber and Lyft, have announced theyre helping women to battle the states draconian new anti-abortion law.\r\nShar Dubey, CEO of… [+3049 chars]"
      },
      {
        "source": {
          "id": "google-news",
          "name": "Google News"
        },
        "author": null,
        "title": "Hazzard: 'No reason to hesitate' getting COVID-19 vaccine - Sky News Australia",
        "description": null,
        "url": "https://news.google.com/__i/rss/rd/articles/CBMiK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9VHp5ZnFGY1JMUXfSAQA?oc=5",
        "urlToImage": null,
        "publishedAt": "2021-09-04T01:49:27Z",
        "content": null
      },
      {
        "source": {
          "id": null,
          "name": "Investor's Business Daily"
        },
        "author": "Investor's Business Daily",
        "title": "Dow Jones Futures: Why The Market Rally Is So Strong; Tesla Holds Buy Point Despite Bad News - Investor's Business Daily",
        "description": "Growth stocks are having their best run in months. Tesla held a buy point despite bad news.",
        "url": "https://www.investors.com/market-trend/stock-market-today/dow-jones-futures-why-market-rally-is-so-strong-tesla-stock-holds-buy-point/",
        "urlToImage": "https://www.investors.com/wp-content/uploads/2018/07/stock-bull-19-shutter.jpg",
        "publishedAt": "2021-09-04T00:45:00Z",
        "content": "Dow Jones futures will open Sunday evening, along with S&amp;P 500 futures and Nasdaq futures. The stock market rally had another solid week, with growth and small-cap stocks leading once again. The … [+9221 chars]"
      },];
    constructor() {
        super();
    
        this.state = {
             articles : this.articles,
             loading : false
        }
    }
   async componentDidMount(){
       let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ccb1112d21c6466285c2b41b53e6fda7"
       let data = await fetch(url);
       let data1 = await data.json();
       console.log(data1);

       this.setState({articles:data1.articles})
   }
    
    render() {
        return (
            <div className = "container my-3">
                <h1>TOP HEADLINES</h1>
                <div className="row">
                    {this.state.articles.map((element)=>{
                        return <div className="col-md-4" key = {element.url}>
                        <Newsitem title = {element.title} description = {element.description} imageurl = {element.urlToImage} newsurl = {element.url}/>
                        </div>

                    })}
                    
                    {/* <div className="col-md-3">
                    <Newsitem/>
                    </div>
                    <div className="col-md-3">
                    <Newsitem/>
                    </div> */}

                </div>
                {/* <div className="row">
                    <div className="col-md-3">
                    <Newsitem/>
                    </div>
                    <div className="col-md-3">
                    <Newsitem/>
                    </div>
                    <div className="col-md-3">
                    <Newsitem/>
                    </div>

                </div> */}
               
            </div>
        )
    }
}

import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className='container my-3'>   
      <h2>NewsKindle - Top Headlines</h2> 
      <div className="row">
        <div className="col-md-4">
            <NewsItem title= "MyTitle01" description="mydesc"/>
        </div>
        <div className="col-md-4">
            <NewsItem title= "MyTitle02" description="mydesc"/>
        </div>
        <div className="col-md-4">
            <NewsItem title= "MyTitle03" description="mydesc"/>
        </div>

    </div> 
    <div className="row">
    <div className="col-md-4">
            <NewsItem title= "MyTitle11" description="mydesc"/>
        </div>
        <div className="col-md-4">
            <NewsItem title= "MyTitle12" description="mydesc"/>
        </div>
        <div className="col-md-4">
            <NewsItem title= "MyTitle13" description="mydesc"/>
        </div>

    </div>
    <div className="row">
        <div className="col-md-4">
            <NewsItem title= "MyTitle21" description="mydesc"/>
        </div>
        <div className="col-md-4">
            <NewsItem title= "MyTitle22" description="mydesc"/>
        </div>

    </div>   
      </div>
    )
  }
}

export default News
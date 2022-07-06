import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className='my-3'>
                <div className="card" style={{width: "18rem"}}>
                    <img src={!imageUrl?"https://cdn.zeebiz.com/sites/default/files/2022/07/05/188452-untitled-design-2022-07-05t121042063.jpg":imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsUrl} target= "_blank"rel='noreferrer'  className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
      </div>
    )
  }
}

export default NewsItem

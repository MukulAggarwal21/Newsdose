import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
    static defaultProps ={
      country:'in',
      pageSize: '8',
     category: 'general',
    }
    static propTypes ={
      country: PropTypes.string,
      pageSize: PropTypes.number,
      category :PropTypes.string,
    }
 
constructor(){
  super();
  this.state = {
   articles: [],
   loading:false,
   page:1
  }
}

// async updateNews(pageNo){
//  const url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=40a7c6a6321c4dfd82e8ca4e983a9f83&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//     this.setState({loading:true});
//    let data = await fetch(url);
//    let parsedData = await data.json()
//    console.log(parsedData);
//     this.setState({articles:parsedData.articles ,totalResults: parsedData.totalResults , loading:false} )
// }
 async componentDidMount(){
 let  url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=40a7c6a6321c4dfd82e8ca4e983a9f83&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
   let data = await fetch(url);
   let parsedData = await data.json()
   console.log(parsedData);
    this.setState({articles:parsedData.articles ,totalResults: parsedData.totalResults , loading:false} )
 } 

  handlePrevClick = async ()=>{
     console.log("previous")
         let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=40a7c6a6321c4dfd82e8ca4e983a9f83&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
         this.setState({loading:true});
   let data = await fetch(url);
   let parsedData = await data.json()
   console.log(parsedData);
    // this.setState({articles : parsedData.articles} )
    this.setState({
        page : this.state.page -1,
        articles: parsedData.articles,
        loading:false
    })
 }
  
handleNextClick = async ()=> {
    console.log("Next")
    if(!(this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
    // }
    // else{
       let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=40a7c6a6321c4dfd82e8ca4e983a9f83&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
       this.setState({loading:true});
   let data = await fetch(url);
   let parsedData = await data.json()
   console.log(parsedData);
  
    // this.setState({articles : parsedData.articles} )
    this.setState({
        page : this.state.page +1,
        articles: parsedData.articles,
        loading:false
    })
    }
 }
  render() {
      console.log("render")
    return (
      <div className='container my-3 '>
      <center><h1 className="text-center"   style={{margin : '40px 0px'}} >YOUR DAILY DOSE OF NEWS</h1></center>
       {this.state.loading && <Spinner/>}
        <div className="row">
           {!this.state.loading && this.state.articles.map((element)=>{  
            return  <div className="col-md-4" key={element.url}>
                <Newsitem  title={element.title?element.title.slice(0,65):""} description = {element.description ? element.description.slice(0,75) + ".....": "Deep Dive into it through ReadMore to get more Updated right Now.....  "} imageUrl ={element.urlToImage} newsUrl ={element.url} author={element.author} date ={element.publishedAt} source={element.source.name}/>
                   </div>
                })}
        </div>
       <div className="container d-flex justify-content-between ">
              <button disabled={this.state.page<=1} type="button" className="btn btn-sm btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
      <button  type="button" className="btn btn-sm btn-dark" disabled={ this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)} onClick={this.handleNextClick}>Next &rarr;</button>
       </div>
      </div>
    )
  }
}
export default News

           
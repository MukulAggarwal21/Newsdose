
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Newsitem extends Component {

  render() {
     let {title,description , imageUrl ,newsUrl , author ,date,source }= this.props;
      return(
    < div className='my-3'>
         <div className="card" style={{width: "18rem"}}> 
         <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style= {{left :'85%' ,  zIndex: '1'}}>{source}
  </span>
        {/* to make js we use first { } and then to make it object we use another {} */}
  <img src={!imageUrl? "https://wallpaperaccess.com/full/2112558.jpg "  : imageUrl} className="card-img-top " height="200px" alt="...."/>
  <div className="card-body">
    <h5 className="card-title">{title}  
 
  </h5>
    <p className="card-text">{description}</p>
    <p class="card-text"><small className="text-body-secondary">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
<a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
  Read More
</a>
{newsUrl && (
  <Link to={`/summary/${encodeURIComponent(newsUrl)}`} className="btn btn-sm btn-dark ms-5">
    Summarise it!!
  </Link>
)}


  </div>
  </div>
  </div>
  
    )
  }
}

export default Newsitem


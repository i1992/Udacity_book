import React, { Component } from 'react';

class Select extends Component {


  render(){
    return(

      // <li key = {bookks.id}>
      //   <div className="book">
      //     <div className="book-top">
      //       <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${bookks.imageLinks && bookks.imageLinks.thumbnail})` }}></div>
      //       <div className="book-shelf-changer">
      //         <select value={bookks.shelf} onChange = {e => this.handleChange(bookks, e.target.value)}>
      //           <option value="none" disabled>Move to...</option>
      //           <option value="currentlyReading">Currently Reading</option>
      //           <option value="wantToRead">Want to Read</option>
      //           <option value="read">Read</option>
      //           <option value="none">None</option>
      //         </select>
      //       </div>
      //     </div>
      //     <div className="book-title">{bookks.title}</div>
      //     <div className="book-authors">{bookks.authors}</div>
      //   </div>
      // </li>

    )
  }

}


export default Select

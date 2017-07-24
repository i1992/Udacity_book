import React, { Component } from 'react';


class select extends Component{
  // handleChange = (book, shelf) => {
  //     this.props.onUpdateBook(book, shelf)
  //   }
  render(){
    return(
      <ol className="books-grid">
        { this.props.sbook && this.props.sbook.length && this.props.sbook.map((sbooks,i)=>(
      <li key = {sbooks.id}>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${sbooks.imageLinks && sbooks.imageLinks.thumbnail})` }}></div>
            <div className="book-shelf-changer">
              <select  value={sbooks.shelf} onChange = {e => onChange(sbooks, e.target.value)}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{sbooks.title}</div>
          <div className="book-authors">{sbooks.authors && sbooks.authors.length ? sbooks.authors[0] : 'Unknown Author'}</div>
        </div>
      </li>
    ))}
      </ol>



    )
  }
}


export default select

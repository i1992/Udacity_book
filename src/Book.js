import React, { Component } from 'react';


const Book = (prop) => {
  return (
    <li key = {prop.book.id}>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${prop.book.imageLinks && prop.book.imageLinks.thumbnail})` }}></div>
          <div className="book-shelf-changer">
            <select value={prop.book.shelf} onChange = {e => this.props.onChange(prop.book,e.target.value)}>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{prop.book.title}</div>
        <div className="book-authors">{prop.book.authors}</div>
      </div>
    </li>
  )
}

export default Book;

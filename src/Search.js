import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class Search extends Component {

  state = {
    query: '',
    sbook: []
  }
  updateQuery = (query) => {
    this.setState({ query: query.trim() })
    BooksAPI.search(query).then((sbook)=>{
        this.setState({ sbook })
        // console.log(sbook)
      })
  }

  handleChange = (book, shelf) => {
      this.props.onUpdateBook(book, shelf)
    }


  render(){
    return(
      <div className="search-books">
            <div className="search-books-bar">
              <Link className='close-search' to='/'>Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" value={this.state.query}
                  onChange={(event) => this.updateQuery(event.target.value)}
                />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {this.state.sbook && this.state.sbook.length && this.state.sbook.map((sbooks,i)=>(
                  <li key = {sbooks.id}>
                    <div className="book">
                      <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${sbooks.imageLinks && sbooks.imageLinks.thumbnail})` }}></div>
                        <div className="book-shelf-changer">
                          <select  value={sbooks.shelf} onChange = {e => this.handleChange(sbooks, e.target.value)}>
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
            </div>
          </div>
    )
  }
}

export default Search

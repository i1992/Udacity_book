import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

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
                  <Book
                    key = {sbooks.id}
                    book = {sbooks}
                    onChange = {onChange}
                  />
                ))}
              </ol>
            </div>
          </div>
    )
  }
}

export default Search

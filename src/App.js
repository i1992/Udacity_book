import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'
import Getbook from './Getbook'
import { Route } from 'react-router-dom'
import Search from './Search'
import './App.css'

class BooksApp extends Component {
  state = {
    book : [],
  }
  componentDidMount(){
  this.Booksload()
  }

  Booksload = () =>{
    BooksAPI.getAll().then((book)=>{
      this.setState({ book })
        console.log(book);
        })
  }

  changeShelf = (bookchange, shelf) =>{
    console.log(bookchange)
    BooksAPI.update(bookchange, shelf)
    .then (()=> this.Booksload())

  }
  render() {
    return (
      <div className="app">
        <Route exact path='/' render={()=>(
          <Getbook
            book = {this.state.book}
            onChange = {this.changeShelf}

          />
        )}/>
        <Route path='/search' render={()=>(
          <Search
            onChange = {this.changeShelf}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp

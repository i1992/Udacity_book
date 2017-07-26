import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'
import Getbook from './Getbook'
import { Route } from 'react-router-dom'
import Search from './Search'
import './App.css'

class BooksApp extends Component {
  state = {

    book : [],
    sbook : []
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

  BookSearch = (query) => {
    BooksAPI.search(query)

    .then(sbook =>{ this.setState({ sbook })
      console.log(sbook);
    });
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
            BookSearch = {this.BookSearch}
            book = {this.state.sbook}
            onChange = {this.changeShelf}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp

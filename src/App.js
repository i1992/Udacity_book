import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'
import Getbook from './Getbook'
import { Route } from 'react-router-dom'
import Search from './Search'
import './App.css'

class BooksApp extends Component {
  state = {
    book : [],
    heading : [{name :'Currently Reading', value : 'currentlyReading'},
     {name:'Want to Read', value : 'wantToRead'},
      {name:'Read', value : 'read'}],



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
    BooksAPI.update(bookchange, shelf)
    .then (()=> this.Booksload())

  }

  render() {
    return (
      <div className="app">

        <Route exact path='/' render={({ history })=>(
          <Getbook
            book = {this.state.book}
            heading = {this.state.heading}
            onUpdateBook = {(book, shelf) =>{
              this.changeShelf(book, shelf)
            }}

          />
        )}/>
        <Route path='/search' render={()=>(
          <Search
            onUpdateBook = {(book, shelf) =>{
              this.changeShelf(book, shelf)
            }}
          />


        )}/>

      </div>
    )
  }
}

export default BooksApp

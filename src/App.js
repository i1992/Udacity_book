import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'
import Getbook from './Getbook'
import { Route } from 'react-router-dom'
import Search from './Search'
import './App.css'

class BooksApp extends Component {
  state = {
    book : []

  }

  componentDidMount(){
    BooksAPI.getAll().then((book)=>{
      this.setState({ book })

      // console.log(book);
    })
  }


  render() {
    return (
      <div className="app">

        <Route exact path='/' render={()=>(
          <Getbook
            book = {this.state.book}
          />
        )}/>
        <Route path='/search' render={()=>(
          <Search/>
        )}/>

      </div>
    )
  }
}

export default BooksApp

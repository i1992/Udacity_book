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
      {name:'Read', value : 'read'}]

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
            heading = {this.state.heading}
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

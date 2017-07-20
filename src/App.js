import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'
import Getbook from './Getbook'
import { Route } from 'react-router-dom'
import Search from './Search'
import './App.css'

class BooksApp extends Component {
  state = {
    book : []
  //  book1: []

  }

  // componentDidMount(){
  //   BooksAPI.search('art').then((book)=>{
  //     this.setState({ book })
  //
  //     console.log(book);
  //   })
  // }

  // searchbook(query){
  //   BooksAPI.search(query).then(query =>{
  //     this.setState(state => ({
  //       book : state.book.filter([books])
  //     }))
  //   })
  // }

  render() {
    return (
      <div className="app">

        <Route exact path='/' component={Getbook}/>
        <Route path='/search' render={()=>(
          <Search/>
        )}/>

      </div>
    )
  }
}

export default BooksApp

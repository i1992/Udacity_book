import React, { Component } from 'react';
import { Link } from 'react-router-dom'
// import serialzeForm from 'form-serialize'

class Getbook extends Component {

  handleChange = (book, shelf) => {
      this.props.onUpdateBook(book, shelf)
    }
  renderUserMessage(ready){
    return this.props.book.map((gbook) => {
      // console.log(bookks)
      if (gbook.shelf === ready) {
        return (
           <li key = {gbook.id}>
             <div className="book">
               <div className="book-top">
                 <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${gbook.imageLinks && gbook.imageLinks.thumbnail})` }}></div>
                 <div className="book-shelf-changer">
                   <select value={gbook.shelf} onChange = {e => this.handleChange(gbook, e.target.value)}>
                     <option value="none" disabled>Move to...</option>
                     <option value="currentlyReading">Currently Reading</option>
                     <option value="wantToRead">Want to Read</option>
                     <option value="read">Read</option>
                     <option value="none">None</option>
                   </select>
                 </div>
               </div>
               <div className="book-title">{gbook.title}</div>
               <div className="book-authors">{gbook.authors}</div>
             </div>
           </li>
        );
      }

    })
 }
 render (){
   return(
     <div className="list-books">
       <div className="list-books-title">
          <h1>MyReads</h1>
       </div>
       <div className="list-books-content">
         <div>
           <div className="bookshelf">
             <h2 className="bookshelf-title">Currently Reading</h2>
           <div className="bookshelf-books">
             <ol className="books-grid">
               { this.renderUserMessage('currentlyReading') }
             </ol>
           </div>
          </div>
       </div>
       <div>
         <div className="bookshelf">
           <h2 className="bookshelf-title">Want to Read</h2>
         <div className="bookshelf-books">
           <ol className="books-grid">
             { this.renderUserMessage('wantToRead') }
           </ol>
         </div>
        </div>
     </div>
     <div>
       <div className="bookshelf">
         <h2 className="bookshelf-title">Read</h2>
       <div className="bookshelf-books">
         <ol className="books-grid">
           { this.renderUserMessage('read') }
         </ol>
       </div>
      </div>
   </div>
     </div>
     <div className="open-search">
       <Link to = "/search" className = 'open-search'></Link>
     </div>
   </div>

   )
 }
}


export default Getbook

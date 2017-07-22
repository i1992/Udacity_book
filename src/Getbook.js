import React, { Component } from 'react';
import { Link } from 'react-router-dom'



class Getbook extends Component {



  renderUserMessage(ready){
    return this.props.book.map((bookks) => {
      console.log(bookks)
      if (bookks.shelf === ready) {
        return (


                     <li key = {bookks.id}>
                       <div className="book">
                         <div className="book-top">
                           <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${bookks.imageLinks && bookks.imageLinks.thumbnail})` }}></div>
                           <div className="book-shelf-changer">
                             <select>
                               <option value="none" disabled>Move to...</option>
                               <option value="currentlyReading">Currently Reading</option>
                               <option value="wantToRead">Want to Read</option>
                               <option value="read">Read</option>
                               <option value="none">None</option>
                             </select>
                           </div>
                         </div>
                         <div className="book-title">{bookks.title}</div>
                         <div className="book-authors">{bookks.authors}</div>
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
 {/* <div>

    <h1>Currently Reading</h1>
    { this.renderUserMessage('currentlyReading') }

    <h1>Want to Read</h1>
    { this.renderUserMessage('wantToRead') }

    <h1>Read</h1>
    { this.renderUserMessage('read') }
  </div> */}

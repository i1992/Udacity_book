import React, { Component } from 'react';
import { Link } from 'react-router-dom'



class Getbook extends Component {

  constructor(props) {
      super(props);
      this.state = {value: 'none'};

      this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event) {
      this.setState({value: event.target.value});
      console.log (event.target.value)
    }
  state = {
    showSearchPage :true
  }



  render(){
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <h2 className="bookshelf-title" >Currently Reading</h2>
            {this.props.book.map((books) => (
              <div>
                {books.shelf === "currentlyReading" && (
                 <div className="bookshelf">
                   <div className="bookshelf-books">
                     <ol className="books-grid">
                       <li>
                         <div className="book">
                           <div className="book-top">
                             <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${books.imageLinks && books.imageLinks.thumbnail})` }}></div>
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
                           <div className="book-title">{books.title}</div>
                           <div className="book-authors">{books.authors}</div>
                         </div>
                       </li>
                     </ol>
                   </div>
                 </div>
              )}
              </div>

            ))}
          </div>
          <div>
            <h2 className="bookshelf-title" >Want to Read</h2>
            {this.props.book.map((books) => (
              <div>
                {books.shelf === "wantToRead" && (
                 <div className="bookshelf">
                   <div className="bookshelf-books">
                     <ol className="books-grid">
                       <li>
                         <div className="book">
                           <div className="book-top">
                             <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${books.imageLinks && books.imageLinks.thumbnail})` }}></div>
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
                           <div className="book-title">{books.title}</div>
                           <div className="book-authors">{books.authors}</div>
                         </div>
                       </li>
                     </ol>
                   </div>
                 </div>
              )}
              </div>

            ))}
          </div>
          <div>
            <h2 className="bookshelf-title" >Read</h2>
            {this.props.book.map((books) => (
              <div>
                {books.shelf === "read" && (
                 <div className="bookshelf">
                   <div className="bookshelf-books">
                     <ol className="books-grid">
                       <li>
                         <div className="book">
                           <div className="book-top">
                             <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${books.imageLinks && books.imageLinks.thumbnail})` }}></div>
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
                           <div className="book-title">{books.title}</div>
                           <div className="book-authors">{books.authors}</div>
                         </div>
                       </li>
                     </ol>
                   </div>
                 </div>
              )}
              </div>

            ))}
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

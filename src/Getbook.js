import React, { Component } from 'react';
import { Link } from 'react-router-dom'



class Getbook extends Component {


  renderUserMessage(ready){
    this.props.book.map((bookks)=>{
      console.log(bookks.shelf)
      console.log(ready);
      if (bookks.shelf === ready) {
        return (
          <span>

            <p>You can visit settings to reset your password</p>
          </span>
        );
      } else {
        return (
          <h2>Hey man! Log in to see this section</h2>
        );
      }
    })

 }

 render (){
   return(
     <div>
       <h1>Currently Reading</h1>
       { this.renderUserMessage('currentlyReading') }
     </div>
   )
 }
}


export default Getbook

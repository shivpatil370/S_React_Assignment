// import React from 'react'
import BookCartContext from "./BookContext"

const BookContextProvider = (props) => {


    const contextvalue={
        data:[],
        render:[],
        getEditId:null
    };

  return (
    <BookCartContext.Provider value={contextvalue}>
           {props.children}
    </BookCartContext.Provider>
  )
}

export default BookContextProvider

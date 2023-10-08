
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('/api/books')
      .then(response => setBooks(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
   
    <div>
         <Navbar/>
    
      <h1>Welcome to the Book Store</h1>
      <ul>
        {books.map(book => (
          <li key={book._id}>
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
            <p>Genre: {book.genre}</p>
            {

            }
          </li>
        ))}
      </ul>
    </div>
  );
}

 export default Home;





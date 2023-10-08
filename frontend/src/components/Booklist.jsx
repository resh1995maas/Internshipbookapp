import React from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';

const Booklist = () => {
  
  const books = [
    { title: 'Book 1', author: 'Author 1', genre: 'Fiction', availability: 'Available' },
    { title: 'Book 2', author: 'Author 2', genre: 'Non-Fiction', availability: 'Rented' },
    
  ];

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" align="center" gutterBottom>
        Book List
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Author</TableCell>
              <TableCell>Genre</TableCell>
              <TableCell>Availability</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {books.map((book, index) => (
              <TableRow key={index}>
                <TableCell>{book.title}</TableCell>
                <TableCell>{book.author}</TableCell>
                <TableCell>{book.genre}</TableCell>
                <TableCell>{book.availability}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Booklist;

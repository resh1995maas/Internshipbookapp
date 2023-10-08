

import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';

const Admindashboard = () => {
  
  const adminBooks = [
    
  ];

  return (
    <Container className="mt-5">
      <h2>Admin Dashboard</h2>
      <div className="d-flex flex-wrap">
        {adminBooks.map((book) => (
          <Card key={book.id} className="mr-3 mb-3" style={{ width: '18rem' }}>
            {
              
            }
            <Button variant="danger">Delete</Button>
            <Button variant="warning">Edit</Button>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default Admindashboard;

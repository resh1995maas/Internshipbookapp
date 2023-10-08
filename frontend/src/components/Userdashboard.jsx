

import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';

const Userdashboard = () => {
 
  const userBooks = [
    
  ];

  return (
    <Container className="mt-5">
      <h2>User Dashboard</h2>
      <div className="d-flex flex-wrap">
        {userBooks.map((book) => (
          <Card key={book.id} className="mr-3 mb-3" style={{ width: '18rem' }}>
            {
              
            }
            <Button variant="primary">Write Review</Button>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default Userdashboard;

// FeedbackPage.j
import React from 'react';
import './index.css';

const FeedbackPage = () => {
  const name=localStorage.getItem('userName')
 

  return (
    <div className="feedback-page">
        <h1>{name}</h1>
      <h2>Thank you for visiting our page</h2>
      
    </div>
  );
};

export default FeedbackPage;

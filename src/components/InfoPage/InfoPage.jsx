import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  return (
    <div className="container">
    <h2>Your upcoming events</h2>
    <h2>Chat with other users</h2>
    

    </div>
  );
}

export default InfoPage;

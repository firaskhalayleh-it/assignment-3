import './App.css';
import React, { useState } from 'react';
import Name from './components/comp1';
import Form from './components/Form';
import 'bootstrap/dist/css/bootstrap.css';
import BookList from './components/BookList';
import UserCard from './components/UserCard';
import IsChecked from './components/isChecked';

function App() {
  const [userData, setUserData] = useState(null);

  const handleFormSubmit = (formData) => {
    setUserData(formData);
  };

  return (
    <div className="container text-center">
      <header className="header d-block justify-content-center">
        <Name />
      </header>
      <Form onSubmit={handleFormSubmit} />
      <div className="row d-flex">
        <BookList />
      </div>
      <div >
      <IsChecked/>
        
      </div>

    </div>
  );
}

export default App;

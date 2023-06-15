import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import UserCard from "./UserCard";

const Form = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    
    e.preventDefault();

    // Pass the form data to the UserCard component
    setSubmitted(true);

    // Reset the form fields
    setName("");
    setAge("");
    setEmail("");
  };

  return (
    <div className="container">
      <form id="myform" className="needs-validation" noValidate onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="text"
            className="form-control"
            id="age"
            name="age"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary mt-4">Submit</button>
      </form>

      { <UserCard userData={{ name, age, email }} />}
    </div>
  );
};

export default Form;

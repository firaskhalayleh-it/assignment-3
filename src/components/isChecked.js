import React, { useState } from 'react';



const IsChecked = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [text, setText] = useState('');

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        Disable Input
      </label>
      <br />
      <input
        type="text"
        value={text}
        onChange={handleInputChange}
        disabled={isChecked}
      />
      <br />
      <h3 >{text}</h3>

    
    </div>
  );
};

export default IsChecked;

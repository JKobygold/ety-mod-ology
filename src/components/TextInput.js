// src/components/TextInput.js
import React, { useState } from 'react';

function TextInput() {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the message submission
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Type your message..."
      />
      <button type="submit">Send</button>
    </form>
  );
}

export default TextInput;

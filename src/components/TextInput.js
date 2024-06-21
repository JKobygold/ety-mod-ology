import React, { useState } from 'react';

function TextInput() {
  const [text, setText] = useState('');
  const [submittedText, setSubmittedText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedText(text);
    setText('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
      {submittedText && (
        <p>{submittedText}</p>
      )}
    </div>
  );
}

export default TextInput;

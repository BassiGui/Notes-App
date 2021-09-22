import React from 'react';

const CreateNote = ({ addNote }) => {
  const [value, setValue] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!value) return;
    addNote(value);
    setValue('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new note"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
};

export default CreateNote;

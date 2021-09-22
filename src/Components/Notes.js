import React from 'react';
import Note from './Note';
import CreateNote from '../Forms/CreateNote';
import style from './Notes.module.css';

const Notes = () => {
  const [notes, setNotes] = React.useState([]);

  function handleAddNote(note) {
    const newNote = [...notes, note];
    setNotes(newNote);
  }

  function handleRemoveNote(index) {
    const newNote = [...notes];
    newNote.splice(index, 1);
    setNotes(newNote);
  }
  return (
    <div className={style.container}>
      <h1 className={style.header}>Notes</h1>
      <div className={style.note}>
        {notes.map((note, index) => (
          <Note
            note={note}
            index={index}
            key={index}
            removeNote={handleRemoveNote}
          />
        ))}
      </div>
      <div className={style.CreateNote}>
        <CreateNote addNote={handleAddNote} />
      </div>
    </div>
  );
};

export default Notes;

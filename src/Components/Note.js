import React from 'react';
import style from './Note.module.css';

const Note = ({ note, index, removeNote }) => {
  return (
    <div className={style.note}>
      {note}
      <button onClick={() => removeNote(index)}>x</button>
    </div>
  );
};

export default Note;

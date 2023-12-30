// components/NoteForm.jsx
import React, { useState } from 'react';

const NoteForm = ({ onAddNote, onDeleteAll }) => {
  const [note, setNote] = useState('');

  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };

  const handleAddNote = () => {
    if (note.trim() === "ニフラム") {
      onDeleteAll();
    } else {
      onAddNote(note);
    }
    setNote('');
  };

  return (
    <div>
      <textarea rows="4" cols="50" value={note} onChange={handleNoteChange} />
      <br />
      <button onClick={handleAddNote}>投下ッ！</button>
    </div>
  );
};

export default NoteForm;

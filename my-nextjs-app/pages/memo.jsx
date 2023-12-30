// pages/about.jsx
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Shibe from '../components/Shibe';
import NoteForm from '../components/NoteForm';
import NoteList from '../components/NoteList';

const AboutPage = () => {
 
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // ローカルストレージからデータを取得
    const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(storedNotes);
  }, []);

  const handleAddNote = (newNote) => {
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
    // ローカルストレージにデータを保存
    localStorage.setItem('notes', JSON.stringify(newNotes));
  };

  const handleDeleteAll = () => {
    setNotes([]);
    localStorage.removeItem('notes');
  };

  return (
    <div id="home">
      <Header />
      <h1>メモ帳</h1>
      <section>
        {/* Shibe */}
        <Shibe count={1} urls={true} httpsUrls={true} imageSize="500px" />
      </section>
      <p>一度打ちこんだら消えないから！</p>

      <NoteForm onAddNote={handleAddNote} onDeleteAll={handleDeleteAll} />
      <NoteList notes={notes} />
      <Footer />
    </div>
  );
};

export default AboutPage;

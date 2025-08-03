// src/pages/Notes.jsx
import React, { useState, useEffect } from "react";

const Notes = () => {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("college_notes");
    return saved ? JSON.parse(saved) : [];
  });

  const [text, setText] = useState("");

  useEffect(() => {
    localStorage.setItem("college_notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (text.trim()) {
      setNotes([...notes, { id: Date.now(), text }]);
      setText("");
    }
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">📝 Notes</h2>
      <div className="max-w-2xl mx-auto">
        <textarea
          className="w-full p-3 bg-gray-800 border border-gray-700 rounded mb-4 text-white"
          rows="4"
          placeholder="Write your note here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <button
          onClick={addNote}
          className="glow-button bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded w-full mb-6"
        >
          ➕ Add Note
        </button>

        <div className="space-y-4">
          {notes.map((note) => (
            <div
              key={note.id}
              className="bg-gray-800 p-4 rounded shadow-md flex justify-between items-start"
            >
              <p className="whitespace-pre-wrap">{note.text}</p>
              <button
                onClick={() => deleteNote(note.id)}
                className="text-red-400 hover:text-red-600 ml-4"
              >
                ❌
              </button>
            </div>
          ))}
          {notes.length === 0 && <p className="text-gray-400">No notes added yet.</p>}
        </div>
      </div>
    </div>
  );
};

export default Notes;
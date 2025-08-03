import React, { useState, useEffect } from "react";

const NotesApp = () => {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("college_notes");
    return saved ? JSON.parse(saved) : [];
  });

  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem("college_notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (input.trim() === "") return;
    const newNote = {
      id: Date.now(),
      text: input,
    };
    setNotes([newNote, ...notes]);
    setInput("");
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Quick Notes</h1>

      <div className="max-w-3xl mx-auto">
        <div className="flex gap-4 mb-6">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your note..."
            className="w-full p-3 rounded bg-gray-800 border border-gray-600"
          />
          <button
            onClick={addNote}
            className="glow-button bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            Add
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {notes.map((note) => (
            <div
              key={note.id}
              className="bg-gray-800 p-4 rounded shadow-md relative"
            >
              <p>{note.text}</p>
              <button
                onClick={() => deleteNote(note.id)}
                className="absolute top-2 right-2 text-red-400 hover:text-red-600"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotesApp;
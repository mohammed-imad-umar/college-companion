import React, { useState, useEffect } from "react";

const NotesApp = () => {
  const [notes, setNotes] = useState(() => {
    const stored = localStorage.getItem("college_notes");
    return stored ? JSON.parse(stored) : [];
  });

  const [newNote, setNewNote] = useState("");

  useEffect(() => {
    localStorage.setItem("college_notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (newNote.trim()) {
      const note = {
        id: Date.now(),
        text: newNote,
      };
      setNotes([note, ...notes]);
      setNewNote("");
    }
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Notes</h1>

      <div className="max-w-3xl mx-auto space-y-6">
        <div className="flex gap-4">
          <textarea
            rows={3}
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            placeholder="Write your note..."
            className="w-full p-3 rounded bg-gray-800 border border-gray-600"
          />
          <button
            onClick={addNote}
            className="glow-button bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded h-fit"
          >
            Add
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {notes.map((note) => (
            <div
              key={note.id}
              className="bg-gray-800 rounded p-4 shadow-md flex justify-between items-start"
            >
              <p className="whitespace-pre-wrap">{note.text}</p>
              <button
                onClick={() => deleteNote(note.id)}
                className="text-red-500 hover:text-red-700 ml-4 font-bold"
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
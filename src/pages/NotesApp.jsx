import { useState, useEffect } from "react";

const NotesApp = () => {
  const [notes, setNotes] = useState(() => {
    const stored = localStorage.getItem("student_notes");
    return stored ? JSON.parse(stored) : [];
  });
  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem("student_notes", JSON.stringify(notes));
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
    <div className="text-white p-6 max-w-3xl mx-auto bg-gray-900 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Notes App</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Write a note..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 rounded bg-gray-700"
        />
        <button
          onClick={addNote}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {notes.map((note) => (
          <div
            key={note.id}
            className="bg-gray-800 p-4 rounded shadow relative group"
          >
            <p className="text-gray-200">{note.text}</p>
            <button
              onClick={() => deleteNote(note.id)}
              className="absolute top-2 right-2 text-red-400 hover:text-red-600"
              title="Delete"
            >
              ✖
            </button>
          </div>
        ))}
        {notes.length === 0 && (
          <p className="text-center text-gray-400 col-span-full">No notes yet.</p>
        )}
      </div>
    </div>
  );
};

export default NotesApp;

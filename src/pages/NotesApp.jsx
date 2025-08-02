import { useState, useEffect } from "react";

const NotesApp = () => {
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState("");

  useEffect(() => {
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (!noteText.trim()) return;

    const newNote = {
      id: Date.now(),
      text: noteText,
    };
    setNotes([newNote, ...notes]);
    setNoteText("");
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Notes App</h1>
      <div className="max-w-3xl mx-auto space-y-4">
        <textarea
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
          placeholder="Write your note here..."
          rows="4"
          className="w-full p-3 bg-gray-800 border border-gray-700 rounded resize-none"
        ></textarea>
        <button
          onClick={addNote}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Add Note
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
          {notes.map((note) => (
            <div
              key={note.id}
              className="bg-gray-800 p-4 rounded shadow-md relative"
            >
              <button
                onClick={() => deleteNote(note.id)}
                className="absolute top-2 right-2 text-red-500 hover:text-red-700"
              >
                ✕
              </button>
              <p>{note.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotesApp;
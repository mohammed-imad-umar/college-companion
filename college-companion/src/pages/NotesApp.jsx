import { useState } from "react";

const NotesApp = () => {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState("");

  const addNote = () => {
    if (input.trim() === "") return;
    setNotes([...notes, input]);
    setInput("");
  };

  const deleteNote = (index) => {
    const updated = notes.filter((_, i) => i !== index);
    setNotes(updated);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-center mb-4">Notes App</h1>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your note..."
            className="flex-1 p-2 rounded bg-gray-800"
          />
          <button
            onClick={addNote}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded"
          >
            Add
          </button>
        </div>

        {notes.length === 0 ? (
          <p className="text-center text-gray-400">No notes yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {notes.map((note, index) => (
              <div
                key={index}
                className="bg-gray-800 p-4 rounded shadow-md flex justify-between items-start"
              >
                <span className="text-sm">{note}</span>
                <button
                  onClick={() => deleteNote(index)}
                  className="text-red-400 hover:text-red-600 text-sm ml-4"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NotesApp;
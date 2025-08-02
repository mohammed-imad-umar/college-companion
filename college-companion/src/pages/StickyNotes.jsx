import { useState, useEffect } from "react";

const StickyNotes = () => {
  const [notes, setNotes] = useState(() => {
    const stored = localStorage.getItem("stickyNotes");
    return stored ? JSON.parse(stored) : [];
  });
  const [newNote, setNewNote] = useState("");

  useEffect(() => {
    localStorage.setItem("stickyNotes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (!newNote.trim()) return;
    setNotes([...notes, newNote]);
    setNewNote("");
  };

  const deleteNote = (index) => {
    const updated = notes.filter((_, i) => i !== index);
    setNotes(updated);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-center mb-4">Sticky Notes</h1>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            placeholder="Write something..."
            className="flex-1 p-2 rounded bg-gray-800"
          />
          <button
            onClick={addNote}
            className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 rounded text-black font-semibold"
          >
            Add
          </button>
        </div>

        {notes.length === 0 ? (
          <p className="text-center text-gray-400">No sticky notes yet.</p>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {notes.map((note, index) => (
              <li
                key={index}
                className="bg-yellow-300 text-black p-3 rounded shadow flex justify-between items-center"
              >
                <span>{note}</span>
                <button
                  onClick={() => deleteNote(index)}
                  className="text-red-500 hover:text-red-700 text-sm ml-2"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default StickyNotes;
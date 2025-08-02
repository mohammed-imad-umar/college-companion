import { useState, useEffect } from "react";

const StickyNotes = () => {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("sticky_notes");
    return saved ? JSON.parse(saved) : [];
  });
  const [newNote, setNewNote] = useState("");

  useEffect(() => {
    localStorage.setItem("sticky_notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (!newNote.trim()) return;
    const note = {
      id: Date.now(),
      text: newNote,
    };
    setNotes([note, ...notes]);
    setNewNote("");
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="text-white p-6 max-w-4xl mx-auto bg-gray-900 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Sticky Notes</h2>

      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Write your note..."
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          className="flex-grow p-2 rounded bg-gray-700"
        />
        <button
          onClick={addNote}
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {notes.map((note) => (
          <div
            key={note.id}
            className="bg-yellow-200 text-black p-4 rounded-lg shadow-md relative break-words min-h-[100px]"
          >
            <button
              onClick={() => deleteNote(note.id)}
              className="absolute top-1 right-2 text-red-600 hover:text-red-800 text-sm"
            >
              ✖
            </button>
            {note.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StickyNotes;

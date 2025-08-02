import { useEffect, useState } from "react";

const StickyNotes = () => {
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState("");

  useEffect(() => {
    const storedNotes = localStorage.getItem("stickyNotes");
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("stickyNotes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (!noteText.trim()) return;
    const newNote = {
      id: Date.now(),
      text: noteText.trim(),
    };
    setNotes([newNote, ...notes]);
    setNoteText("");
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Sticky Notes</h1>
      <div className="max-w-2xl mx-auto space-y-4">
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Write a note..."
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
            className="flex-1 p-2 bg-gray-800 border border-gray-700 rounded"
          />
          <button
            onClick={addNote}
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded"
          >
            Add
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
          {notes.map((note) => (
            <div
              key={note.id}
              className="bg-yellow-200 text-black p-4 rounded shadow relative"
            >
              <button
                onClick={() => deleteNote(note.id)}
                className="absolute top-2 right-2 text-red-600 hover:text-red-800 text-sm"
              >
                ×
              </button>
              <p className="whitespace-pre-wrap">{note.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StickyNotes;
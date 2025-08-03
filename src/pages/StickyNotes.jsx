import React, { useState, useEffect } from "react";

const StickyNotes = () => {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("college_sticky_notes");
    return saved ? JSON.parse(saved) : [];
  });

  const [newNote, setNewNote] = useState("");

  useEffect(() => {
    localStorage.setItem("college_sticky_notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (newNote.trim()) {
      const note = {
        id: Date.now(),
        text: newNote,
        x: 100 + Math.random() * 400,
        y: 100 + Math.random() * 300,
      };
      setNotes([...notes, note]);
      setNewNote("");
    }
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((n) => n.id !== id));
  };

  const handleDrag = (id, dx, dy) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id ? { ...note, x: note.x + dx, y: note.y + dy } : note
      )
    );
  };

  const handleMouseDown = (e, id) => {
    const startX = e.clientX;
    const startY = e.clientY;

    const handleMouseMove = (moveEvent) => {
      const dx = moveEvent.clientX - startX;
      const dy = moveEvent.clientY - startY;
      handleDrag(id, dx, dy);
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 overflow-hidden">
      <h1 className="text-3xl font-bold mb-6 text-center">Sticky Notes</h1>

      <div className="max-w-xl mx-auto mb-4 flex gap-4">
        <input
          type="text"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Write a sticky note..."
          className="flex-1 p-2 rounded bg-gray-800 border border-gray-600"
        />
        <button
          onClick={addNote}
          className="glow-button bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      {notes.map((note) => (
        <div
          key={note.id}
          onMouseDown={(e) => handleMouseDown(e, note.id)}
          className="absolute w-52 h-32 p-3 rounded-lg shadow-lg cursor-move"
          style={{
            left: note.x,
            top: note.y,
            backgroundColor: "#fef08a",
            color: "#1f2937",
            zIndex: 50,
          }}
        >
          <div className="flex justify-between items-center mb-2">
            <strong>Note</strong>
            <button
              onClick={() => deleteNote(note.id)}
              className="text-red-600 hover:text-red-800"
            >
              ✕
            </button>
          </div>
          <p className="break-words">{note.text}</p>
        </div>
      ))}
    </div>
  );
};

export default StickyNotes;
import React, { useState, useEffect } from "react";

const ClassLinks = () => {
  const [links, setLinks] = useState(() => {
    const stored = localStorage.getItem("class_links");
    return stored ? JSON.parse(stored) : [];
  });

  const [newTitle, setNewTitle] = useState("");
  const [newURL, setNewURL] = useState("");

  const addLink = () => {
    if (!newTitle.trim() || !newURL.trim()) return;
    const updated = [...links, { title: newTitle, url: newURL }];
    setLinks(updated);
    localStorage.setItem("class_links", JSON.stringify(updated));
    setNewTitle("");
    setNewURL("");
  };

  const removeLink = (index) => {
    const updated = links.filter((_, i) => i !== index);
    setLinks(updated);
    localStorage.setItem("class_links", JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Class Links</h1>

      <div className="flex flex-col sm:flex-row gap-2 mb-4 max-w-xl mx-auto">
        <input
          type="text"
          placeholder="Title"
          className="p-2 rounded bg-gray-800 border border-gray-700 w-full"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <input
          type="url"
          placeholder="URL"
          className="p-2 rounded bg-gray-800 border border-gray-700 w-full"
          value={newURL}
          onChange={(e) => setNewURL(e.target.value)}
        />
        <button
          onClick={addLink}
          className="glow-button bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      <ul className="space-y-4 max-w-xl mx-auto">
        {links.map((link, index) => (
          <li
            key={index}
            className="bg-gray-800 p-4 rounded-lg flex items-center justify-between"
          >
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              {link.title}
            </a>
            <button
              onClick={() => removeLink(index)}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClassLinks;
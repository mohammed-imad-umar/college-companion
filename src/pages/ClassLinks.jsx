import React, { useState, useEffect } from "react";

const ClassLinks = () => {
  const [links, setLinks] = useState(() => {
    const stored = localStorage.getItem("college_class_links");
    return stored ? JSON.parse(stored) : [];
  });

  const [title, setTitle] = useState("");
  const [url, setURL] = useState("");

  useEffect(() => {
    localStorage.setItem("college_class_links", JSON.stringify(links));
  }, [links]);

  const addLink = () => {
    if (title.trim() && url.trim()) {
      const newLink = {
        id: Date.now(),
        title,
        url,
      };
      setLinks([...links, newLink]);
      setTitle("");
      setURL("");
    }
  };

  const deleteLink = (id) => {
    setLinks(links.filter((l) => l.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Class Links</h1>

      <div className="max-w-2xl mx-auto space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Title (e.g., DSA Class)"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 rounded bg-gray-800 border border-gray-600"
          />
          <input
            type="url"
            placeholder="https://classlink.com"
            value={url}
            onChange={(e) => setURL(e.target.value)}
            className="w-full p-2 rounded bg-gray-800 border border-gray-600"
          />
          <button
            onClick={addLink}
            className="glow-button bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            Add
          </button>
        </div>

        <ul className="space-y-3">
          {links.map((link) => (
            <li
              key={link.id}
              className="flex justify-between items-center p-3 rounded bg-gray-800 shadow-md"
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
                onClick={() => deleteLink(link.id)}
                className="text-red-500 hover:text-red-700 font-semibold"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ClassLinks;
import { useState, useEffect } from "react";

const ClassLinks = () => {
  const [links, setLinks] = useState([]);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("classLinks");
    if (stored) {
      setLinks(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("classLinks", JSON.stringify(links));
  }, [links]);

  const addLink = () => {
    if (!title || !url) return alert("Please enter both title and URL");
    setLinks([{ id: Date.now(), title, url }, ...links]);
    setTitle("");
    setUrl("");
  };

  const deleteLink = (id) => {
    setLinks(links.filter((link) => link.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Class Links</h1>
      <div className="max-w-2xl mx-auto space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Title (e.g., DSA Class)"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="flex-1 p-2 bg-gray-800 border border-gray-700 rounded"
          />
          <input
            type="url"
            placeholder="https://meet.link"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1 p-2 bg-gray-800 border border-gray-700 rounded"
          />
          <button
            onClick={addLink}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
          >
            Add
          </button>
        </div>

        <ul className="space-y-3 pt-4">
          {links.map((link) => (
            <li
              key={link.id}
              className="bg-gray-800 p-4 rounded flex justify-between items-center"
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
                className="text-sm bg-red-600 px-3 py-1 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ClassLinks;
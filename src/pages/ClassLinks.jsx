import { useState, useEffect } from "react";

const ClassLinks = () => {
  const [links, setLinks] = useState(() => {
    const stored = localStorage.getItem("class_links");
    return stored ? JSON.parse(stored) : [];
  });
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    localStorage.setItem("class_links", JSON.stringify(links));
  }, [links]);

  const addLink = () => {
    if (!title.trim() || !url.trim()) return;
    setLinks([{ id: Date.now(), title, url }, ...links]);
    setTitle("");
    setUrl("");
  };

  const deleteLink = (id) => {
    setLinks(links.filter((link) => link.id !== id));
  };

  return (
    <div className="text-white p-6 max-w-3xl mx-auto bg-gray-900 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Class Links</h2>
      <div className="space-y-2 mb-4">
        <input
          type="text"
          placeholder="Enter title (e.g. DBMS Lecture)"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 rounded bg-gray-700"
        />
        <input
          type="url"
          placeholder="Enter URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full p-2 rounded bg-gray-700"
        />
        <button
          onClick={addLink}
          className="w-full bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
        >
          Add Link
        </button>
      </div>

      {links.length === 0 ? (
        <p className="text-gray-400 text-center">No links added yet.</p>
      ) : (
        <ul className="space-y-3">
          {links.map((link) => (
            <li
              key={link.id}
              className="bg-gray-800 p-3 rounded flex items-center justify-between"
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
                className="text-red-400 hover:text-red-600"
                title="Delete"
              >
                ✖
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ClassLinks;

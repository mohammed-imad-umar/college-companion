import { useState } from "react";

const ClassLinks = () => {
  const [links, setLinks] = useState([]);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const addLink = () => {
    if (title.trim() === "" || url.trim() === "") return;
    setLinks([...links, { title, url }]);
    setTitle("");
    setUrl("");
  };

  const deleteLink = (index) => {
    const updated = links.filter((_, i) => i !== index);
    setLinks(updated);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-center mb-4">Class Links Vault</h1>

        <div className="flex flex-col sm:flex-row gap-2 mb-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Subject or Meeting Title"
            className="flex-1 p-2 rounded bg-gray-800"
          />
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste the class link"
            className="flex-1 p-2 rounded bg-gray-800"
          />
          <button
            onClick={addLink}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded"
          >
            Save
          </button>
        </div>

        {links.length === 0 ? (
          <p className="text-center text-gray-400">No class links added yet.</p>
        ) : (
          <ul className="space-y-3">
            {links.map((link, index) => (
              <li
                key={index}
                className="bg-gray-800 p-3 rounded flex justify-between items-center"
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
                  onClick={() => deleteLink(index)}
                  className="text-red-400 hover:text-red-600 text-sm"
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

export default ClassLinks;
import { useState } from "react";

const SyllabusVault = () => {
  const [syllabi, setSyllabi] = useState([]);
  const [subject, setSubject] = useState("");
  const [link, setLink] = useState("");

  const addSyllabus = () => {
    if (!subject.trim() || !link.trim()) return;
    setSyllabi([...syllabi, { subject, link }]);
    setSubject("");
    setLink("");
  };

  const deleteSyllabus = (index) => {
    const updated = syllabi.filter((_, i) => i !== index);
    setSyllabi(updated);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-center mb-4">Syllabus Vault</h1>

        <div className="flex flex-col sm:flex-row gap-2 mb-4">
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Subject Name"
            className="flex-1 p-2 rounded bg-gray-800"
          />
          <input
            type="url"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="Paste PDF link"
            className="flex-1 p-2 rounded bg-gray-800"
          />
          <button
            onClick={addSyllabus}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded"
          >
            Save
          </button>
        </div>

        {syllabi.length === 0 ? (
          <p className="text-center text-gray-400">No syllabus added yet.</p>
        ) : (
          <ul className="space-y-3">
            {syllabi.map((item, index) => (
              <li
                key={index}
                className="bg-gray-800 p-3 rounded flex justify-between items-center"
              >
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  {item.subject}
                </a>
                <button
                  onClick={() => deleteSyllabus(index)}
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

export default SyllabusVault;
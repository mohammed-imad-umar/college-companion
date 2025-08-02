import { useEffect, useState } from "react";

const SyllabusVault = () => {
  const [syllabi, setSyllabi] = useState([]);
  const [subject, setSubject] = useState("");
  const [link, setLink] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("syllabi");
    if (stored) {
      setSyllabi(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("syllabi", JSON.stringify(syllabi));
  }, [syllabi]);

  const addSyllabus = () => {
    if (!subject || !link) return alert("Both fields required");
    setSyllabi([
      { id: Date.now(), subject, link },
      ...syllabi,
    ]);
    setSubject("");
    setLink("");
  };

  const deleteSyllabus = (id) => {
    setSyllabi(syllabi.filter((s) => s.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Syllabus Vault</h1>
      <div className="max-w-2xl mx-auto space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="flex-1 p-2 bg-gray-800 border border-gray-700 rounded"
          />
          <input
            type="url"
            placeholder="PDF/Drive Link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className="flex-1 p-2 bg-gray-800 border border-gray-700 rounded"
          />
          <button
            onClick={addSyllabus}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
          >
            Add
          </button>
        </div>

        <ul className="space-y-3 pt-4">
          {syllabi.map((s) => (
            <li
              key={s.id}
              className="bg-gray-800 p-4 rounded flex justify-between items-center"
            >
              <div>
                <p className="font-medium">{s.subject}</p>
                <a
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 text-sm hover:underline"
                >
                  View Syllabus
                </a>
              </div>
              <button
                onClick={() => deleteSyllabus(s.id)}
                className="bg-red-600 hover:bg-red-700 text-sm px-3 py-1 rounded"
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

export default SyllabusVault;
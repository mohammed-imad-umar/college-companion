import React, { useState, useEffect } from "react";

const SyllabusVault = () => {
  const [syllabusList, setSyllabusList] = useState(() => {
    const saved = localStorage.getItem("college_syllabus");
    return saved ? JSON.parse(saved) : [];
  });

  const [subject, setSubject] = useState("");
  const [link, setLink] = useState("");

  useEffect(() => {
    localStorage.setItem("college_syllabus", JSON.stringify(syllabusList));
  }, [syllabusList]);

  const addSyllabus = () => {
    if (subject.trim() && link.trim()) {
      const newEntry = {
        id: Date.now(),
        subject,
        link,
      };
      setSyllabusList([...syllabusList, newEntry]);
      setSubject("");
      setLink("");
    }
  };

  const deleteSyllabus = (id) => {
    setSyllabusList(syllabusList.filter((s) => s.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-6">📚 Syllabus Vault</h1>

      <div className="max-w-2xl mx-auto space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Subject Name"
            className="w-full p-2 rounded bg-gray-800 border border-gray-600"
          />
          <input
            type="url"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="Syllabus Link (PDF/Drive)"
            className="w-full p-2 rounded bg-gray-800 border border-gray-600"
          />
          <button
            onClick={addSyllabus}
            className="glow-button bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded"
          >
            Upload
          </button>
        </div>

        <ul className="space-y-3 mt-6">
          {syllabusList.length === 0 && (
            <p className="text-center text-gray-400">No syllabus uploaded yet.</p>
          )}
          {syllabusList.map((s) => (
            <li
              key={s.id}
              className="flex justify-between items-center p-4 bg-gray-800 rounded shadow"
            >
              <div>
                <p className="text-lg font-semibold">{s.subject}</p>
                <a
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline text-sm"
                >
                  View Syllabus
                </a>
              </div>
              <button
                onClick={() => deleteSyllabus(s.id)}
                className="text-red-500 hover:text-red-700"
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

export default SyllabusVault;
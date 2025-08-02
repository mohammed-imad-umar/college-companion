import { useState, useEffect } from "react";

const SyllabusVault = () => {
  const [syllabusItems, setSyllabusItems] = useState(() => {
    const stored = localStorage.getItem("syllabus_items");
    return stored ? JSON.parse(stored) : [];
  });

  const [subject, setSubject] = useState("");
  const [details, setDetails] = useState("");

  useEffect(() => {
    localStorage.setItem("syllabus_items", JSON.stringify(syllabusItems));
  }, [syllabusItems]);

  const addSyllabus = () => {
    if (!subject.trim() || !details.trim()) return;
    setSyllabusItems([
      { id: Date.now(), subject, details },
      ...syllabusItems,
    ]);
    setSubject("");
    setDetails("");
  };

  const deleteSyllabus = (id) => {
    setSyllabusItems(syllabusItems.filter((item) => item.id !== id));
  };

  return (
    <div className="text-white p-6 max-w-3xl mx-auto bg-gray-900 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Syllabus Vault</h2>

      <div className="space-y-2 mb-4">
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full p-2 rounded bg-gray-700"
        />
        <textarea
          placeholder="Syllabus details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          className="w-full p-2 rounded bg-gray-700 h-24"
        />
        <button
          onClick={addSyllabus}
          className="w-full bg-green-600 hover:bg-green-700 px-4 py-2 rounded"
        >
          Add Syllabus
        </button>
      </div>

      {syllabusItems.length === 0 ? (
        <p className="text-gray-400 text-center">No syllabus saved yet.</p>
      ) : (
        <ul className="space-y-3">
          {syllabusItems.map((item) => (
            <li
              key={item.id}
              className="bg-gray-800 p-3 rounded flex flex-col sm:flex-row justify-between"
            >
              <div>
                <p className="font-semibold">{item.subject}</p>
                <p className="text-gray-300">{item.details}</p>
              </div>
              <button
                onClick={() => deleteSyllabus(item.id)}
                className="text-red-400 hover:text-red-600 mt-2 sm:mt-0 sm:ml-4 self-end"
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

export default SyllabusVault;

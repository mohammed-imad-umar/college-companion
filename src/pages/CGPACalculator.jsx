import React, { useState } from "react";

const CGPACalculator = () => {
  // GPA Calculator State
  const [subjects, setSubjects] = useState([{ credits: "" }]);
  const [gpaResult, setGpaResult] = useState(null);

  // CGPA Calculator State
  const [sgpas, setSgpas] = useState([{ sgpa: "" }]);
  const [cgpaResult, setCgpaResult] = useState(null);

  const handleGPAChange = (index, value) => {
    const updated = [...subjects];
    updated[index].credits = value;
    setSubjects(updated);
  };

  const addSubject = () => {
    setSubjects([...subjects, { credits: "" }]);
  };

  const calculateGPA = () => {
    const totalCredits = subjects.reduce(
      (acc, sub) => acc + parseFloat(sub.credits || 0),
      0
    );
    const gpa = totalCredits / subjects.length || 0;
    setGpaResult(gpa.toFixed(2));
  };

  const handleSGPAChange = (index, value) => {
    const updated = [...sgpas];
    updated[index].sgpa = value;
    setSgpas(updated);
  };

  const addSGPA = () => {
    setSgpas([...sgpas, { sgpa: "" }]);
  };

  const calculateCGPA = () => {
    const total = sgpas.reduce((acc, s) => acc + parseFloat(s.sgpa || 0), 0);
    const cgpa = total / sgpas.length || 0;
    setCgpaResult(cgpa.toFixed(2));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-6">CGPA Calculator</h1>

      {/* GPA Section */}
      <div className="bg-gray-800 p-6 rounded mb-8">
        <h2 className="text-xl font-semibold mb-4">GPA (Subject-wise)</h2>

        {subjects.map((sub, index) => (
          <input
            key={index}
            type="number"
            placeholder={`Subject ${index + 1} Credits`}
            value={sub.credits}
            onChange={(e) => handleGPAChange(index, e.target.value)}
            className="w-full p-2 mb-3 rounded bg-gray-700 border border-gray-600"
          />
        ))}

        <div className="flex gap-3">
          <button
            onClick={addSubject}
            className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600"
          >
            + Add Subject
          </button>
          <button
            onClick={calculateGPA}
            className="glow-button bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
          >
            Calculate GPA
          </button>
        </div>

        {gpaResult && (
          <p className="mt-4 text-lg font-semibold">GPA: {gpaResult}</p>
        )}
      </div>

      {/* CGPA Section */}
      <div className="bg-gray-800 p-6 rounded">
        <h2 className="text-xl font-semibold mb-4">CGPA (Semester-wise)</h2>

        {sgpas.map((s, index) => (
          <input
            key={index}
            type="number"
            placeholder={`SGPA Sem ${index + 1}`}
            value={s.sgpa}
            onChange={(e) => handleSGPAChange(index, e.target.value)}
            className="w-full p-2 mb-3 rounded bg-gray-700 border border-gray-600"
          />
        ))}

        <div className="flex gap-3">
          <button
            onClick={addSGPA}
            className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600"
          >
            + Add SGPA
          </button>
          <button
            onClick={calculateCGPA}
            className="glow-button bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            Calculate CGPA
          </button>
        </div>

        {cgpaResult && (
          <p className="mt-4 text-lg font-semibold">CGPA: {cgpaResult}</p>
        )}
      </div>
    </div>
  );
};

export default CGPACalculator;
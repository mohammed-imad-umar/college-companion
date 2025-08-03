// src/pages/CGPACalculator.jsx
import React, { useState } from "react";

const gradeToPoint = {
  O: 10,
  "A+": 9,
  A: 8,
  "B+": 7,
  B: 6,
  C: 5,
  F: 0,
};

const CGPACalculator = () => {
  const [subjects, setSubjects] = useState([
    { grade: "O", credit: "" },
  ]);
  const [gpa, setGPA] = useState(null);

  const [sgpas, setSgpas] = useState([""]);
  const [cgpa, setCGPA] = useState(null);

  const addSubject = () => {
    setSubjects([...subjects, { grade: "O", credit: "" }]);
  };

  const updateSubject = (index, field, value) => {
    const updated = [...subjects];
    updated[index][field] = value;
    setSubjects(updated);
  };

  const calculateGPA = () => {
    let totalCredits = 0;
    let totalPoints = 0;

    for (let s of subjects) {
      const credit = parseFloat(s.credit);
      const point = gradeToPoint[s.grade];

      if (!isNaN(credit) && point !== undefined) {
        totalCredits += credit;
        totalPoints += point * credit;
      }
    }

    const gpaResult = totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : 0;
    setGPA(gpaResult);
  };

  const updateSGPA = (index, value) => {
    const updated = [...sgpas];
    updated[index] = value;
    setSgpas(updated);
  };

  const addSGPA = () => {
    setSgpas([...sgpas, ""]);
  };

  const calculateCGPA = () => {
    const validSGPAs = sgpas.map(Number).filter((s) => !isNaN(s));
    const total = validSGPAs.reduce((acc, curr) => acc + curr, 0);
    const result = validSGPAs.length > 0 ? (total / validSGPAs.length).toFixed(2) : 0;
    setCGPA(result);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">GPA & CGPA Calculator</h1>

      {/* GPA Calculator */}
      <div className="bg-gray-800 p-6 rounded-xl shadow-md mb-10">
        <h2 className="text-xl font-semibold mb-4">GPA Calculator</h2>
        {subjects.map((subject, index) => (
          <div key={index} className="flex gap-4 mb-2">
            <select
              value={subject.grade}
              onChange={(e) => updateSubject(index, "grade", e.target.value)}
              className="p-2 rounded bg-gray-700 border border-gray-600 text-white"
            >
              {Object.keys(gradeToPoint).map((grade) => (
                <option key={grade} value={grade}>
                  {grade}
                </option>
              ))}
            </select>
            <input
              type="number"
              placeholder="Credit"
              value={subject.credit}
              onChange={(e) => updateSubject(index, "credit", e.target.value)}
              className="p-2 rounded bg-gray-700 border border-gray-600 w-24"
            />
          </div>
        ))}
        <div className="flex gap-4 mt-4">
          <button onClick={addSubject} className="glow-button bg-blue-600 px-4 py-2 rounded">
            Add Subject
          </button>
          <button onClick={calculateGPA} className="glow-button bg-green-600 px-4 py-2 rounded">
            Calculate GPA
          </button>
        </div>
        {gpa !== null && <p className="mt-4 text-lg">Your GPA: <strong>{gpa}</strong></p>}
      </div>

      {/* CGPA Calculator */}
      <div className="bg-gray-800 p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4">CGPA Calculator</h2>
        {sgpas.map((sgpa, index) => (
          <input
            key={index}
            type="number"
            placeholder={`SGPA Sem ${index + 1}`}
            value={sgpa}
            onChange={(e) => updateSGPA(index, e.target.value)}
            className="w-full mb-2 p-2 rounded bg-gray-700 border border-gray-600"
          />
        ))}
        <div className="flex gap-4 mt-4">
          <button onClick={addSGPA} className="glow-button bg-blue-600 px-4 py-2 rounded">
            Add SGPA
          </button>
          <button onClick={calculateCGPA} className="glow-button bg-green-600 px-4 py-2 rounded">
            Calculate CGPA
          </button>
        </div>
        {cgpa !== null && <p className="mt-4 text-lg">Your CGPA: <strong>{cgpa}</strong></p>}
      </div>
    </div>
  );
};

export default CGPACalculator;
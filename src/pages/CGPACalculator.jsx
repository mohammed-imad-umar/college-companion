import React, { useState } from "react";

const CGPA = () => {
  const [subjects, setSubjects] = useState([{ credits: "", grade: "" }]);
  const [cgpa, setCGPA] = useState(null);

  const gradePoint = (grade) => {
    const map = {
      "A+": 10,
      A: 9,
      B: 8,
      C: 7,
      D: 6,
      E: 5,
      F: 0,
    };
    return map[grade.toUpperCase()] || 0;
  };

  const handleChange = (index, field, value) => {
    const updated = [...subjects];
    updated[index][field] = value;
    setSubjects(updated);
  };

  const addSubject = () => {
    setSubjects([...subjects, { credits: "", grade: "" }]);
  };

  const calculateCGPA = () => {
    let totalCredits = 0;
    let totalPoints = 0;

    subjects.forEach((subj) => {
      const credits = parseFloat(subj.credits);
      const points = gradePoint(subj.grade);

      if (!isNaN(credits) && points >= 0) {
        totalCredits += credits;
        totalPoints += credits * points;
      }
    });

    if (totalCredits === 0) {
      setCGPA("Invalid input");
    } else {
      setCGPA((totalPoints / totalCredits).toFixed(2));
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">CGPA Calculator</h1>

      <div className="space-y-4 max-w-2xl mx-auto">
        {subjects.map((subj, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row gap-4 items-center bg-gray-800 p-4 rounded-lg shadow-md"
          >
            <input
              type="number"
              placeholder="Credits"
              value={subj.credits}
              onChange={(e) => handleChange(idx, "credits", e.target.value)}
              className="w-full md:w-1/2 p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Grade (A+, A, B, etc)"
              value={subj.grade}
              onChange={(e) => handleChange(idx, "grade", e.target.value)}
              className="w-full md:w-1/2 p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none"
            />
          </div>
        ))}

        <div className="flex gap-4 justify-center">
          <button
            onClick={addSubject}
            className="glow-button bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
          >
            Add Subject
          </button>
          <button
            onClick={calculateCGPA}
            className="glow-button bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            Calculate CGPA
          </button>
        </div>

        {cgpa && (
          <div className="text-center mt-6 text-xl">
            <span className="font-semibold">Your CGPA is:</span> {cgpa}
          </div>
        )}
      </div>
    </div>
  );
};

export default CGPA;
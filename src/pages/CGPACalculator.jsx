import React, { useState } from "react";

const CGPACalculator = () => {
  const [semesters, setSemesters] = useState([{ sgpa: "", credits: "" }]);
  const [cgpa, setCGPA] = useState(null);

  const handleChange = (index, field, value) => {
    const newSemesters = [...semesters];
    newSemesters[index][field] = value;
    setSemesters(newSemesters);
  };

  const addSemester = () => {
    setSemesters([...semesters, { sgpa: "", credits: "" }]);
  };

  const calculateCGPA = () => {
    let totalPoints = 0;
    let totalCredits = 0;

    semesters.forEach((sem) => {
      const sgpa = parseFloat(sem.sgpa);
      const credits = parseFloat(sem.credits);
      if (!isNaN(sgpa) && !isNaN(credits)) {
        totalPoints += sgpa * credits;
        totalCredits += credits;
      }
    });

    if (totalCredits === 0) {
      setCGPA(null);
      return;
    }

    const calculated = totalPoints / totalCredits;
    setCGPA(calculated.toFixed(2));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">CGPA Calculator</h1>

      <div className="max-w-2xl mx-auto space-y-4">
        {semesters.map((sem, index) => (
          <div key={index} className="flex gap-4">
            <input
              type="number"
              step="0.01"
              value={sem.sgpa}
              onChange={(e) => handleChange(index, "sgpa", e.target.value)}
              placeholder={`SGPA for Sem ${index + 1}`}
              className="w-1/2 p-2 rounded bg-gray-800 border border-gray-700"
            />
            <input
              type="number"
              value={sem.credits}
              onChange={(e) => handleChange(index, "credits", e.target.value)}
              placeholder="Credits"
              className="w-1/2 p-2 rounded bg-gray-800 border border-gray-700"
            />
          </div>
        ))}

        <div className="flex gap-4">
          <button
            onClick={addSemester}
            className="glow-button bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full"
          >
            Add Semester
          </button>
          <button
            onClick={calculateCGPA}
            className="glow-button bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded w-full"
          >
            Calculate CGPA
          </button>
        </div>

        {cgpa && (
          <div className="text-center mt-6 text-xl font-bold">
            Your CGPA is: <span className="text-yellow-400">{cgpa}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CGPACalculator;
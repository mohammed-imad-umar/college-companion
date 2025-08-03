import React, { useState } from "react";

const CGPACalculator = () => {
  const [semesters, setSemesters] = useState([{ sgpa: "", credits: "" }]);
  const [cgpa, setCGPA] = useState(null);

  const handleChange = (index, field, value) => {
    const updated = [...semesters];
    updated[index][field] = value;
    setSemesters(updated);
  };

  const addSemester = () => {
    setSemesters([...semesters, { sgpa: "", credits: "" }]);
  };

  const calculateCGPA = () => {
    let totalGradePoints = 0;
    let totalCredits = 0;

    semesters.forEach(({ sgpa, credits }) => {
      const sgpaFloat = parseFloat(sgpa);
      const creditFloat = parseFloat(credits);
      if (!isNaN(sgpaFloat) && !isNaN(creditFloat)) {
        totalGradePoints += sgpaFloat * creditFloat;
        totalCredits += creditFloat;
      }
    });

    if (totalCredits === 0) {
      setCGPA("Invalid Input");
    } else {
      const finalCGPA = (totalGradePoints / totalCredits).toFixed(2);
      setCGPA(finalCGPA);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">CGPA Calculator</h1>

      <div className="max-w-3xl mx-auto space-y-4">
        {semesters.map((sem, index) => (
          <div key={index} className="flex gap-4 items-center">
            <input
              type="number"
              step="0.01"
              placeholder={`SGPA Sem ${index + 1}`}
              value={sem.sgpa}
              onChange={(e) =>
                handleChange(index, "sgpa", e.target.value)
              }
              className="w-full p-2 bg-gray-800 border border-gray-600 rounded"
            />
            <input
              type="number"
              placeholder="Credits"
              value={sem.credits}
              onChange={(e) =>
                handleChange(index, "credits", e.target.value)
              }
              className="w-full p-2 bg-gray-800 border border-gray-600 rounded"
            />
          </div>
        ))}

        <div className="flex justify-between mt-4">
          <button
            onClick={addSemester}
            className="glow-button bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded"
          >
            + Add Semester
          </button>
          <button
            onClick={calculateCGPA}
            className="glow-button bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
          >
            Calculate CGPA
          </button>
        </div>

        {cgpa !== null && (
          <div className="text-center mt-6">
            <h2 className="text-2xl font-semibold">
              Your CGPA:{" "}
              <span className="text-green-400">{cgpa}</span>
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default CGPACalculator;
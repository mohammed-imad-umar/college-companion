import { useState } from "react";

const CGPACCalculator = () => {
  const [grades, setGrades] = useState([{ credits: "", grade: "" }]);
  const [cgpa, setCGPA] = useState(null);

  const gradeToPoint = (grade) => {
    const points = {
      S: 10,
      A: 9,
      B: 8,
      C: 7,
      D: 6,
      E: 5,
      F: 0,
    };
    return points[grade.toUpperCase()] || 0;
  };

  const handleChange = (index, field, value) => {
    const updated = [...grades];
    updated[index][field] = value;
    setGrades(updated);
  };

  const addSubject = () => {
    setGrades([...grades, { credits: "", grade: "" }]);
  };

  const calculateCGPA = () => {
    let totalCredits = 0;
    let totalPoints = 0;

    grades.forEach(({ credits, grade }) => {
      const c = parseFloat(credits);
      const g = gradeToPoint(grade);
      if (!isNaN(c) && g >= 0) {
        totalCredits += c;
        totalPoints += c * g;
      }
    });

    const result = totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : "0.00";
    setCGPA(result);
  };

  return (
    <div className="text-white p-6 max-w-2xl mx-auto bg-gray-900 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">CGPA Calculator</h2>
      {grades.map((entry, index) => (
        <div key={index} className="flex gap-4 mb-3">
          <input
            type="number"
            placeholder="Credits"
            value={entry.credits}
            onChange={(e) => handleChange(index, "credits", e.target.value)}
            className="w-1/2 p-2 bg-gray-700 rounded text-white"
          />
          <input
            type="text"
            placeholder="Grade (A/B/C/S...)"
            value={entry.grade}
            onChange={(e) => handleChange(index, "grade", e.target.value)}
            className="w-1/2 p-2 bg-gray-700 rounded text-white"
          />
        </div>
      ))}
      <div className="flex gap-4">
        <button
          onClick={addSubject}
          className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded"
        >
          + Add Subject
        </button>
        <button
          onClick={calculateCGPA}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
        >
          Calculate CGPA
        </button>
      </div>
      {cgpa !== null && (
        <div className="mt-4 text-lg font-semibold">
          Your CGPA is: <span className="text-green-400">{cgpa}</span>
        </div>
      )}
    </div>
  );
};

export default CGPACCalculator;

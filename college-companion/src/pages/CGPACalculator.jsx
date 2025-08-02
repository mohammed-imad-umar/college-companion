import { useState } from "react";

const CGPACalculator = () => {
  const [semesters, setSemesters] = useState([{ sgpa: "", credits: "" }]);
  const [cgpa, setCgpa] = useState(null);

  const handleChange = (index, field, value) => {
    const updated = [...semesters];
    updated[index][field] = value;
    setSemesters(updated);
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

    if (totalCredits > 0) {
      setCgpa((totalPoints / totalCredits).toFixed(2));
    } else {
      setCgpa("N/A");
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-center">CGPA Calculator</h1>

        {semesters.map((sem, index) => (
          <div key={index} className="flex gap-4 mb-3">
            <input
              type="number"
              placeholder={`SGPA ${index + 1}`}
              value={sem.sgpa}
              onChange={(e) => handleChange(index, "sgpa", e.target.value)}
              className="flex-1 p-2 rounded bg-gray-800 text-white"
              step="0.01"
              min="0"
              max="10"
              required
            />
            <input
              type="number"
              placeholder="Credits"
              value={sem.credits}
              onChange={(e) => handleChange(index, "credits", e.target.value)}
              className="flex-1 p-2 rounded bg-gray-800 text-white"
              step="1"
              min="1"
              required
            />
          </div>
        ))}

        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={addSemester}
            className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded"
          >
            Add Semester
          </button>
          <button
            onClick={calculateCGPA}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded"
          >
            Calculate
          </button>
        </div>

        {cgpa && (
          <div className="text-center mt-6 text-xl font-semibold text-blue-400">
            Your CGPA is: {cgpa}
          </div>
        )}
      </div>
    </div>
  );
};

export default CGPACalculator;
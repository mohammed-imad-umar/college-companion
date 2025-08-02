import { useState } from "react";

const CGPACalculator = () => {
  const [semesters, setSemesters] = useState([{ sgpa: "" }]);
  const [cgpa, setCgpa] = useState(null);

  const handleSGPAChange = (index, value) => {
    const updated = [...semesters];
    updated[index].sgpa = value;
    setSemesters(updated);
  };

  const addSemester = () => {
    setSemesters([...semesters, { sgpa: "" }]);
  };

  const calculateCGPA = () => {
    const validSGPAs = semesters
      .map((s) => parseFloat(s.sgpa))
      .filter((num) => !isNaN(num));
    if (validSGPAs.length === 0) {
      setCgpa(null);
      return;
    }
    const total = validSGPAs.reduce((sum, sgpa) => sum + sgpa, 0);
    const result = (total / validSGPAs.length).toFixed(2);
    setCgpa(result);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-6">CGPA Calculator</h1>
      <div className="space-y-4 max-w-md mx-auto">
        {semesters.map((semester, index) => (
          <div key={index}>
            <label className="block mb-1">Semester {index + 1} SGPA:</label>
            <input
              type="number"
              step="0.01"
              value={semester.sgpa}
              onChange={(e) => handleSGPAChange(index, e.target.value)}
              className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
            />
          </div>
        ))}

        <button
          onClick={addSemester}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Add Semester
        </button>

        <button
          onClick={calculateCGPA}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded ml-2"
        >
          Calculate CGPA
        </button>

        {cgpa && (
          <div className="mt-4 text-xl text-center">
            <strong>Your CGPA is:</strong> {cgpa}
          </div>
        )}
      </div>
    </div>
  );
};

export default CGPACalculator;
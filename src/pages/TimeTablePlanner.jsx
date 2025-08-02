import { useState, useEffect } from "react";

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const TimetablePlanner = () => {
  const [timetable, setTimetable] = useState(() => {
    const saved = localStorage.getItem("college_timetable");
    return saved ? JSON.parse(saved) : {};
  });

  const [selectedDay, setSelectedDay] = useState("Monday");
  const [time, setTime] = useState("");
  const [subject, setSubject] = useState("");

  useEffect(() => {
    localStorage.setItem("college_timetable", JSON.stringify(timetable));
  }, [timetable]);

  const addEntry = () => {
    if (!time.trim() || !subject.trim()) return;

    const updatedDay = timetable[selectedDay] ? [...timetable[selectedDay]] : [];
    updatedDay.push({ time, subject });

    setTimetable({ ...timetable, [selectedDay]: updatedDay });
    setTime("");
    setSubject("");
  };

  const deleteEntry = (day, index) => {
    const updated = [...timetable[day]];
    updated.splice(index, 1);
    setTimetable({ ...timetable, [day]: updated });
  };

  return (
    <div className="text-white p-6 max-w-4xl mx-auto bg-gray-900 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Timetable Planner</h2>

      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <select
          value={selectedDay}
          onChange={(e) => setSelectedDay(e.target.value)}
          className="p-2 rounded bg-gray-700"
        >
          {daysOfWeek.map((day) => (
            <option key={day}>{day}</option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Time (e.g., 9:00 - 10:00)"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="p-2 rounded bg-gray-700 flex-1"
        />
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="p-2 rounded bg-gray-700 flex-1"
        />
        <button
          onClick={addEntry}
          className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      <div className="space-y-6">
        {daysOfWeek.map((day) => (
          <div key={day}>
            <h3 className="font-semibold text-lg text-blue-400">{day}</h3>
            {timetable[day] && timetable[day].length > 0 ? (
              <ul className="pl-4">
                {timetable[day].map((entry, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center py-1 border-b border-gray-700"
                  >
                    <span>{entry.time} - {entry.subject}</span>
                    <button
                      onClick={() => deleteEntry(day, index)}
                      className="text-red-400 hover:text-red-600"
                    >
                      ✖
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-500">No entries.</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimetablePlanner;

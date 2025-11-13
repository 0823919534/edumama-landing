import React, { useState } from "react";

export default function Tracker() {
  const initialProgress = {
    gradeR_letters: 0,
    gradeR_numbers: 0,
    grade1_literacy: 0,
    grade1_numeracy: 0,
  };

  const [progress, setProgress] = useState(initialProgress);

  const handleComplete = (activity) => {
    setProgress((prev) => ({
      ...prev,
      [activity]: prev[activity] + 1,
    }));
  };

  return (
    <section id="tracker" className="tracker">
      <div className="container">
        <h2>Offline Progress Tracker</h2>
        <div className="activities">
          {Object.keys(progress).map((activity) => (
            <div key={activity} className="activity-card">
              <h3>{activity.replace("_", " ")}</h3>
              <p>Points: {progress[activity]}</p>
              <button onClick={() => handleComplete(activity)}>Complete Activity</button>
            </div>
          ))}
        </div>
        <p className="legal-note">
          Tracker points are stored locally for offline use.
        </p>
      </div>
    </section>
  );
}

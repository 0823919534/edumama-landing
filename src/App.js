import React, { useState } from "react";
import "./App.css";

function App() {
  // Grade R offline progress tracker
  const initialProgress = {
    letters: 0,
    numbers: 0,
    shapes: 0,
    colors: 0,
  };
  const [progress, setProgress] = useState(initialProgress);

  const handleComplete = (activity) => {
    setProgress((prev) => ({
      ...prev,
      [activity]: prev[activity] + 1,
    }));
  };

  return (
    <div className="App">
      {/* Header */}
      <header>
        <div className="container header-container">
          <img src="/images/logo.png" alt="EduMama Logo" className="logo" />
          <nav>
            <a href="#resources">Resources</a>
            <a href="#tracker">Progress Tracker</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="hero"
        style={{ backgroundImage: 'url("/images/hero.jpg")' }}
      >
        <div className="hero-text">
          <h1>Learning that starts at home, grows with the community</h1>
          <p>EduMama empowers mothers to educate children in townships.</p>
          <a
            href="https://wa.me/27823919534"
            className="cta-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact via WhatsApp
          </a>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="resources">
        <div className="container">
          <h2>Grade R & School Resources</h2>
          <ul>
            <li>
              <a
                href="https://www.africanstorybook.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                African Storybook
              </a>
            </li>
            <li>
              <a
                href="https://bookdash.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                BookDash
              </a>
            </li>
            <li>
              <a
                href="https://www.nalibali.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nal’ibali
              </a>
            </li>
            <li>
              <a
                href="https://www.siyavula.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Siyavula
              </a>
            </li>
            <li>
              <a
                href="https://www.education.gov.za/Curriculum/LearningandTeachingSupportMaterials(LTSM)/Workbooks/GradeRResourceKit.aspx"
                target="_blank"
                rel="noopener noreferrer"
              >
                DoE Grade R Resource Kit
              </a>
            </li>
            <li>
              <a
                href="https://www.education.gov.za/Curriculum/LearningandTeachingSupportMaterials(LTSM)/2025Workbooks1.aspx"
                target="_blank"
                rel="noopener noreferrer"
              >
                DoE Grade R–7 Workbooks
              </a>
            </li>
          </ul>
          <p className="legal-note">
            Legal note: All resources listed are either open educational resources or official
            Department of Education materials. Any use must respect copyright and licensing
            terms.
          </p>
        </div>
      </section>

      {/* Progress Tracker Section */}
      <section id="tracker" className="tracker">
        <div className="container">
          <h2>Grade R Progress Tracker</h2>
          <div className="activities">
            {Object.keys(progress).map((activity) => (
              <div key={activity} className="activity-card">
                <h3>{activity.charAt(0).toUpperCase() + activity.slice(1)}</h3>
                <p>Points: {progress[activity]}</p>
                <button onClick={() => handleComplete(activity)}>
                  Complete Activity
                </button>
              </div>
            ))}
          </div>
          <p className="legal-note">
            All content used in the tracker is created by EduMama or sourced legally from
            open-access materials.
          </p>
        </div>
      </section>

      {/* Grade 1 Content Placeholder */}
      <section id="grade1" className="grade1">
        <div className="container">
          <h2>Grade 1 Content</h2>
          <p>
            Grade 1 lessons and resources will be added here, including English and isiZulu
            lessons, activities, and trackers. All content will follow CAPS and legally
            sourced open education resources.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <p>
            📱 WhatsApp:{" "}
            <a href="https://wa.me/27823919534" target="_blank" rel="noopener noreferrer">
              082 391 9534
            </a>
          </p>
          <p>Contact: info@edumama.org</p>
          <p>&copy; 2025 EduMama</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

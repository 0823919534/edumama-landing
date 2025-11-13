import React from "react";

export default function Grade1() {
  return (
    <section id="resources-grade1" className="resources">
      <div className="container">
        <h2>Grade 1 Resources</h2>
        <ul>
          <li>
            <a href="https://www.education.gov.za/Curriculum/LearningandTeachingSupportMaterials(LTSM)/2025Workbooks1.aspx" target="_blank" rel="noopener noreferrer">
              DoE Grade 1–7 Workbooks
            </a>
          </li>
          <li>
            <a href="https://www.storyplace.org/" target="_blank" rel="noopener noreferrer">
              International Phonics & Story Resources
            </a>
          </li>
          <li>
            <a href="https://www.starfall.com/" target="_blank" rel="noopener noreferrer">
              Free Literacy & Phonics Lessons
            </a>
          </li>
          <li>
            <a href="https://www.readingbear.org/" target="_blank" rel="noopener noreferrer">
              Phonics & Reading Practice
            </a>
          </li>
        </ul>
        <p className="legal-note">
          Legal note: All international resources listed are free for educational use. South African CAPS resources are officially provided by the Department of Education.
        </p>
      </div>
    </section>
  );
}

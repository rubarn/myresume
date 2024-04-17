import React, { useState } from 'react';
import './App.css';
import MyFooter from './MyFooter';


function ExpandableSection({ title, children }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="expandable-section">
      <button onClick={() => setIsExpanded(!isExpanded)} className="expand-btn">
        {title}
      </button>
      {isExpanded && <div className="content">{children}</div>}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ruben Rokkones</h1>
        <p>ruben_r96@hotmail.com</p>
      </header>
      <ExpandableSection title="Education">
        <h2>2019 - 2024 Norwegian University of Science and Technology</h2>
        <p>Natural Science with Teacher Education, years 8 - 13</p>
        <p>Master's degree programme - Computer Science and Mathematics</p>
        <h2></h2>
      </ExpandableSection>
      <ExpandableSection title="Experience">
        <h2>Dec 2023 - Current Trondheim Kommune</h2>
        <p>Substitute teacher</p>
      </ExpandableSection>
      <ExpandableSection title="Additional Information">
        <p>Additional information...</p>
      </ExpandableSection>
      {/* Footer */}
      <MyFooter />
    </div>
  );
}

export default App;
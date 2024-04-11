import React, { useState } from 'react';
import './App.css';

function Dropdown({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown">
      <button onClick={() => setIsOpen(!isOpen)} className="dropbtn">{title}</button>
      {isOpen && <div className="dropdown-content">{content}</div>}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ruben Rokkones</h1>
        <p>7056 Ranheim</p>
        <p>+47 47621034 | ruben_r96@hotmail.com</p>
        <p>Born: May 17, 1996</p>
      </header>
      <Dropdown title="Education" content={<Education />} />
      <Dropdown title="Experience" content={<Experience />} />
      <Dropdown title="Additional Information" content={<AdditionalInfo />} />
      <Dropdown title="References" content={<References />} />
    </div>
  );
}

const Education = () => (
  <div>
    {/* List all education items here */}
  </div>
);

const Experience = () => (
  <div>
    {/* List all experience items here */}
  </div>
);

const AdditionalInfo = () => (
  <div>
    {/* Add additional information here */}
  </div>
);

const References = () => (
  <div>
    <p>Lars Kvendbø, Principal at Hoeggen school</p>
    <p>Phone: 72 54 03 08</p>
    <p>Email: lars.kvendbo@ou.trondheim.kommune.no</p>
    <p>Other references available upon request.</p>
  </div>
);

export default App;
import React, { useState } from 'react';
import './DropdownRow.css';

const DropdownRow = ({ options1, options2, options3, options4 }) => {
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const [selectedOption3, setSelectedOption3] = useState('');
  const [selectedOption4, setSelectedOption4] = useState('');

  const handleOptionSelect1 = (event) => {
    setSelectedOption1(event.target.value);
  };

  const handleOptionSelect2 = (event) => {
    setSelectedOption2(event.target.value);
  };

  const handleOptionSelect3 = (event) => {
    setSelectedOption3(event.target.value);
  };

  const handleOptionSelect4 = (event) => {
    setSelectedOption4(event.target.value);
  };

  return (
    <div className="dropdown-row-container">
      <select value={selectedOption1} onChange={handleOptionSelect1} className="dropdown">
        <option value="">Select City</option>
        {options1.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <select value={selectedOption2} onChange={handleOptionSelect2} className="dropdown">
        <option value="">Select Category</option>
        {options2.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <select value={selectedOption3} onChange={handleOptionSelect3} className="dropdown">
        <option value="">Select Language</option>
        {options3.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <select value={selectedOption4} onChange={handleOptionSelect4} className="dropdown">
        <option value="">Select Experience</option>
        {options4.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownRow;

import React, { useState, useRef } from "react";

const SelectBox = ({ options, selectedValue, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  const handleClickOutside = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleSelectChange = (event) => {
    onChange(event.target.getAttribute('value'));
    setIsOpen(false);
    document.removeEventListener("mousedown", handleClickOutside);
  };

  const handleSelectClick = () => {
    document.addEventListener("mousedown", handleClickOutside);
    setIsOpen(!isOpen);
  };

  return (
    <div className="custom-select-box" ref={selectRef}>
      <div
        className={`select-container ${isOpen ? "open" : ""}`}
        onClick={handleSelectClick}
      >
        <div className="selected-value">{selectedValue ? selectedValue : 'Select note type'}</div>
        <img className='arrow' src={isOpen ? "/images/arrow-up.svg" : "/images/arrow-down.svg"} alt="open"/>
      </div>
      <div className={`options-container  ${!isOpen ? "d-none" : ""}`}>
        {options.map((option) => (
          <div
            className={`option ${option.value === selectedValue ? "selected" : ""}`}
            key={option.value}
            onClick={handleSelectChange}
            value={option.value}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectBox;
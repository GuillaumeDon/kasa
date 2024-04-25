import React, { useState } from 'react';
import { ArrowUpIcon, ArrowDownIcon } from '../components/Arrows'; // Assure-toi que le chemin d'importation est correct



const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse-container">
      <div className="collapse-container-header" onClick={toggleCollapse}>
        <h3>{title}</h3>
        {isOpen ? <ArrowDownIcon /> : <ArrowUpIcon />}
      </div>
      {isOpen && <div className="collapse-content">{children}</div>}
    </div>
  );
};

export default Collapse;

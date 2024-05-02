import React, { useState } from 'react';
import { ArrowUpIcon, ArrowDownIcon } from '../../components/Arrows'; 



const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse-container">
      <div className="collapse-container-header" onClick={toggleCollapse}>
        <h3 className="collapse-container-header-title">{title}</h3>
        {isOpen ? <ArrowDownIcon /> : <ArrowUpIcon />}
      </div>
      {isOpen && <div className="collapse-container-content">{children}</div>}
    </div>
  );
};

export default Collapse;

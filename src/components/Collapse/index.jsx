// import React, { useState } from 'react';
// import { ArrowUpIcon, ArrowDownIcon } from '../../components/Arrows'; 



// const Collapse = ({ title, children , isList : boolean }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleCollapse = () => {
//     setIsOpen(!isOpen);
//   };

//   //si islist = true ? generere les <ul><li> :  generer une <p>
//   return (
//     <div className="collapse-container">
//       <div className="collapse-container-header" onClick={toggleCollapse}>
//         <h3 className="collapse-container-header-title">{title}</h3>
//         {isOpen ? <ArrowDownIcon /> : <ArrowUpIcon />}
//       </div>
//       {isOpen && <div className="collapse-container-content">{children}</div>}
//     </div>
//   );
// };

// export default Collapse;


import React, { useState, useRef, useEffect } from 'react';
import { ArrowUpIcon } from '../../components/Arrows';

const Collapse = ({ title, children, isList, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
    } else {
      contentRef.current.style.maxHeight = '0px';
    }
  }, [isOpen]);

  return (
    <div className={`collapse-container ${className}`}>
      <div className="collapse-container-header" onClick={toggleCollapse}>
        <h3 className="collapse-container-header-title">{title}</h3>
        <div className={`collapse-arrow ${isOpen ? 'open' : 'closed'}`}>
          <ArrowUpIcon />
        </div>
      </div>
      <div ref={contentRef} className={`collapse-container-content ${isOpen ? 'open' : 'closed'}`}>
        {children}
      </div>
    </div>
  );
};

export default Collapse;

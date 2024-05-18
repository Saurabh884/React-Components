

import React, { useState } from 'react';

const Collapsible = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapsible = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleCollapsible}>
        {isOpen ? '-' : '+'} {title}
      </button>
      {isOpen && <div>{children}</div>}
    </div>
  );
};

export default Collapsible;

/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const NameContext = React.createContext();

const NameProvider = ({ children }) => {
  const [ name1, setName1 ] = useState("Ange namn 1");
  const [ name2, setName2 ] = useState("Ange namn 2");

  return (
    <NameContext.Provider 
    value={{ 
        name1, 
        setName1, 
        name2, 
        setName2
        }}>
      {children}
    </NameContext.Provider>
  );
};

export { NameProvider, NameContext };
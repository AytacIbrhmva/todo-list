import React, { useState, createContext } from 'react'
import { Test } from './Button';

const modes = {
  light: {
    background: '#fff',
    color: '#000',
  },
  dark: {
    background: '#000',
    color: '#fff',
  }
}

export const ModesContext = createContext();

export default function Context() {

  const [color, setColor] = useState(modes.light);

  const toggle = () => {
    if(color === modes.light) {
      setColor(modes.dark);
    } else {
      setColor(modes.light)
    }
  }
  
  const value = {
    color,
    toggle,
    modes,
  }

  return (
    <div className="App">
      <ModesContext.Provider value={color}>
        <Test />
      </ModesContext.Provider>
    </div>
  );
}

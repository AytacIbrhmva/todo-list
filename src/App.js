import './App.css';
import React, {createContext, useState, useEffect} from 'react';
import Form from './components/Form';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import EditTask from './components/EditTask';
import NotFound from './components/NotFound';
import { Test } from './components/Button';

export const ThemeContext = createContext('light');

function App() {

  const [theme, setTheme] = useState(() => {
    const saved = JSON.parse(localStorage.getItem("theme"));
    return saved || "light";
  })

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  const toggleTheme = () => {
    setTheme((theme) => (theme == 'light' ? 'dark' : 'light'))
  }


  return (
    <div className="App">
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        <Router>
          <Routes>
            <Route path='/' element={<Form />} />
            <Route path='/edit/:id' element={<EditTask />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          {/* <Test /> */}
        </Router>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;

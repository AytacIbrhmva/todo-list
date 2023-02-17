import React, {useContext} from 'react';
import { ThemeContext } from '../App';

export const Button = () => {

    const {theme, toggleTheme} = useContext(ThemeContext)

  return (
    <div className="home">
        <button onClick={toggleTheme} >{theme == 'light' ? '🌞' : '🌙'}</button>
    </div>
  )
}

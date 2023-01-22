import React from 'react';
import './ThemeSelector.css';
import Icon from "../img/modeIcon.svg"
import { useTheme } from '../hooks/useTheme';



function ThemeSelector() {
    const {changeColor, changeMode, mode} = useTheme();
    const themeColor = ["red", "#5F847C ", "#299898", "#2A363B", "#F67280", "#355C7D", ]

const toggleMode =()=>{
    changeMode(mode === "dark" ? "light" : "dark")
}
console.log(mode)

  return (
    <div className='theme-selector'>
        <div className='mode-toggle'>
            <img
               src={Icon}
               onClick={toggleMode}
               alt="Toggle image for dark/light"
               style={{filter: mode === "dark" ? "invert(100%)" : "invert(20%)" }}
            />
        </div>
        <div className='theme-buttons'>
            {
                themeColor.map(color=>(
                    <div 
                      key={color}
                      onClick={()=> changeColor(color)}
                      style={{background: color}}

                    />
                ))
            }

        </div>
      
    </div>
  )
}

export default ThemeSelector

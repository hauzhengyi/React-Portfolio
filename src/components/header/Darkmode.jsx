import React, { useState, useContext, useEffect } from 'react';
import { ImSun } from 'react-icons/im';
import { HiMoon } from 'react-icons/hi';
import { Theme } from '/src/App';

function DarkMode() {
  const [theme, setTheme] = useContext(Theme);
  const [showBubble, setShowBubble] = useState(true);

  useEffect(() => {
    document.querySelector('body').setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-zhengyi-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    setShowBubble(false);
  };

  return (
    <>
      {showBubble ? (
        <div className="sidebuttons__bubble" onClick={toggleTheme}>
          Try me!
        </div>
      ) : (
        ''
      )}

      <a href="#0" className="sidebuttons__darkmode" onClick={toggleTheme}>
        {theme === 'dark' ? <ImSun /> : <HiMoon />}
      </a>
    </>
  );
}

export default DarkMode;

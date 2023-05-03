import React, { useContext, useEffect } from 'react';
import { ImSun } from 'react-icons/im';
import { HiMoon } from 'react-icons/hi';
import { Theme } from '/src/App';

function DarkMode() {
  const [theme, setTheme] = useContext(Theme);

  useEffect(() => {
    document.querySelector('body').setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-zhengyi-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="header__darkmode">
      <a href="#0" className="darkmode__icon" onClick={toggleTheme}>
        {theme === 'dark' ? <ImSun /> : <HiMoon />}
      </a>
    </div>
  );
}

export default DarkMode;

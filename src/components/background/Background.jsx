import './background.css';
import React, { useState, useContext, useEffect } from 'react';
import { Theme } from '/src/App';
import DOTS from 'vanta/src/vanta.dots';

function Background() {
  const light = {
    el: '#background',
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    scale: 1.0,
    scaleMobile: 1.0,
    size: 3.5,
    spacing: 100.0,
    showLines: false,
    color: 0x9daafb,
    backgroundColor: 0xffffff,
  };

  const dark = {
    el: '#background',
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    scale: 1.0,
    scaleMobile: 1.0,
    size: 3.5,
    spacing: 100.0,
    showLines: false,
    color: 0x7e853a,
    backgroundColor: 0x1a1a1a,
  };

  const [theme, setTheme] = useContext(Theme);

  const [effect, setEffect] = useState();

  useEffect(() => {
    if (effect != undefined) effect.destroy();
    if (theme == 'light') setEffect(DOTS(light));
    if (theme == 'dark') setEffect(DOTS(dark));
  }, [theme]);

  return <div id="background" className="background"></div>;
}

export default Background;

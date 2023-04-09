import React from 'react';
import CV from '../../assets/Hau_Zheng_Yi_CV.pdf';

function CallToAction() {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-cta">
        Get in Touch
      </a>
    </div>
  );
}

export default CallToAction;

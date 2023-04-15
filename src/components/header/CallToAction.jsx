import React from 'react';
// import CV from '../../assets/Hau_Zheng_Yi_CV.pdf';
const CV =
  'https://raw.githubusercontent.com/hauzhengyi/React-Portfolio/main/src/assets/Hau_Zheng_Yi_CV.pdf';

function CallToAction() {
  return (
    <div className="callToAction header__calltoaction">
      <a
        href={CV}
        download
        className="btn calltoaction__cv"
        crossOrigin="anonymous"
        target="_blank"
      >
        Download CV
      </a>
      <a href="#contact" className="btn btn-cta calltoaction__contact">
        Get in Touch
      </a>
    </div>
  );
}

export default CallToAction;

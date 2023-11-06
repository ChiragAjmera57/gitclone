import React from "react";
import heroBanner from "../img/hero-bg.png";
import herodrom from "../img/hero-drone.webp";
export const Hero = () => {
  return (
    <div className="hero-section">
      <img src={heroBanner} alt="" srcset="" />
      <img id="hero-drone" src={herodrom} alt="" srcset="" />
      <img
        id="connector"
        src="https://github.githubassets.com/assets/lines-hero-6c09abf3dd42.svg"
        alt=""
        srcset=""
      />
      <div className="titles">
        <div>
          <div className="left">
            <img id="lsdnf" width={40} height={40}
              src="https://github.githubassets.com/assets/eyebrow-23@2x-563f292d9e30.png"
              loading="lazy"
              alt=""
              srcset=""
            />
          </div>
          <div className="right">
            <p>GitHub Universe: Dive in to AI, security, and DevEx</p>
            <p>Get your tickets now to join us on Nov. 8-9.</p>
          </div>
        </div>
        <div>
          <p>Let’s build from here</p>
        </div>
        <div>
          <p>
            The AI-powered developer platform to build, scale, and deliver
            secure software.
          </p>
        </div>
        <div>
          <div>
            <input placeholder="Email address" type="text" />
            <a>Sign up for GitHub</a>
          </div>
          <div>
            <a>Start a free enterprise trial</a>
          </div>
        </div>
      </div>
      <div className="line-svg">
      <svg aria-hidden="true" height="24" viewBox="0 0 24 24" fill='currentColor' version="1.1" width="24" data-view-component="true" className=" text-white glowing-icon">
                        <path d="M15.22 4.97a.75.75 0 0 1 1.06 0l6.5 6.5a.75.75 0 0 1 0 1.06l-6.5 6.5a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L21.19 12l-5.97-5.97a.75.75 0 0 1 0-1.06Zm-6.44 0a.75.75 0 0 1 0 1.06L2.81 12l5.97 5.97a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-6.5-6.5a.75.75 0 0 1 0-1.06l6.5-6.5a.75.75 0 0 1 1.06 0Z"></path>
                    </svg>
      </div>
    </div>
  );
};

export default Hero
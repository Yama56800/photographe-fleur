import React from 'react';

export default function BtnRotation() {
  return (
    <>
      <a className="link">
        <svg viewBox='0 0 200 200' width='200' height='200' xmlns='http://www.w3.org/2000/svg' className="link__svg" aria-labelledby="link1-title link1-desc">
          <title id="link1-title">Come quick and click this</title>
          <desc id="link1-desc">A rotating link with text placed around a circle with an arrow inside</desc>

          <path id="link-circle" className="link__path" d="M 20, 100 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0" stroke="none" fill="none" />
          <text className="link__text">
            <textPath href="#link-circle" stroke="none">
              click click click click
            </textPath>
          </text>
        </svg>
      </a>
    </>
  );
}

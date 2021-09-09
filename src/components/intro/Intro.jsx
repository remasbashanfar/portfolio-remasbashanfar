import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["UCLA Student", "Software Developer", "Photographer", "Machine Learning"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        {/* <div className="imgContainer"> */}
        {/* <div>
          <img src="assets/hijabiWorking2.jpeg" alt="" />
        </div> */}
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hello! I'm</h2>
          <h1>Remas Salah</h1>
          <h3>
              <span ref={textRef}></span>
          </h3>
          <br/>
          <a href="https://drive.google.com/file/d/1XwE_XKyMycRgk5rAIxCbE_5QHiNic2tW/view?usp=sharing" className="button">
         <button class="button">View Resume
         </button>
         </a>
          {/* <button onclick="location.href='https://drive.google.com/file/d/1XwE_XKyMycRgk5rAIxCbE_5QHiNic2tW/view?usp=sharing'" type="button">View Resume</button> */}
        </div>
        <a className="aa" href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}

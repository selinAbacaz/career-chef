import TypewriterComponent from "typewriter-effect";
import mia from "@assets/images/mia.png";
import "@css/components/Landing.css";

export function Landing() {
  return (
    <div className="landing-container">
      <div className="landing-box">
        <div>
          <div className="landing-title">Career Chef</div>
          <span className="landing-typewriter">
            <TypewriterComponent
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(500)
                  .changeDelay(75)
                  .typeString("(Powered by AI)")
                  .start();
              }}
            />
          </span>
        </div>
        <p className="landing-desc">[Desc here]</p>
      </div>
      <img src={mia} />
    </div>
  );
}

import { Image } from "@mantine/core";
import mia from "@assets/images/mia.png";
import "@css/pages/HomePage.css";
import TypewriterComponent from "typewriter-effect";

export function HomePage() {
  return (
    <div className="home-main">
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
        <Image h="600" w="auto" fit="contain" src={mia} />
      </div>
    </div>
  );
}

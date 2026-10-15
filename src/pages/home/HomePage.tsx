import { Image } from "@mantine/core";
import mia from "@assets/images/mia.png";
import careerChefArt from "@assets/images/career-chef-art.png";
import bunny from "@assets/images/career-bunnny.png";
import worm from "@assets/images/career-worm.png";
import TypewriterComponent from "typewriter-effect";
import { BoxButton } from "@components";
import "@css/pages/HomePage.css";

export function HomePage() {
  return (
    <div className="home-main">
      <section className="home-section landing-container">
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
      </section>

      <section className="home-section">
        <div className="grid grid-cols-2 gap-10">
          <div
            className="buttons-image"
            style={{ backgroundImage: `url(${careerChefArt})` }}
          />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <BoxButton className="bg-[#fa8072]">Basic Questions</BoxButton>
            </div>
            <div
              className="bg-[#ff9747b9]"
              style={{ backgroundImage: `url(${bunny})` }}
            />

            <div>
              <BoxButton className="bg-[#FE8A2E]">Detailed Questions</BoxButton>
            </div>
            <div
              className="bg-[#ff9747b9]"
              style={{ backgroundImage: `url(${worm})` }}
            />
          </div>
        </div>
      </section>

      <section></section>
    </div>
  );
}

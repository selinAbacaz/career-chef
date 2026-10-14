import { Image, Button } from "@mantine/core";
import mia from "@assets/images/mia.png";
import "@css/HomePage.css";

export function HomePage() {
  return (
    <div className="home-main">
      <div className="landing-container">
        <div className="landing-box">
          <div>
            <div className="landing-title">Career Chef</div>
            <span className="landing-typewriter">(Powered By AI)</span>
          </div>
          <p className="landing-desc">[Desc here]</p>
          <div className="button-container">
            <Button
              size="md"
              styles={{
                root: {
                  backgroundColor: "#f9e0d1",
                  color: "#5d3627",
                  border: "1px solid #5d3627",
                },
              }}
            >
              Basic Questions
            </Button>
            <Button
              size="md"
              styles={{
                root: {
                  backgroundColor: "#f9e0d1",
                  color: "#5d3627",
                  border: "1px solid #5d3627",
                },
              }}
            >
              Detailed Questions
            </Button>
          </div>
        </div>
        <Image h="600" w="auto" fit="contain" src={mia} />
      </div>
    </div>
  );
}

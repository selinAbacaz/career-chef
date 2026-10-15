import { Landing } from "./components/Landing";
import { HomeButtons } from "./components/HomeButtons";
import { Description } from "./components/Description";
import "@css/pages/HomePage.css";

const sections = [Landing, HomeButtons, Description];

export function HomePage() {
  return (
    <div className="home-main">
      {sections.map((Section) => (
        <section className="home-section">
          <Section />
        </section>
      ))}
    </div>
  );
}

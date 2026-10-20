import { Landing } from "./components/Landing";
import { HomeButtons } from "./components/HomeButtons";
import { Description } from "./components/Description";
import "@css/pages/HomePage.css";

const sections = [
  { id: "home-landing", Section: Landing },
  { id: "home-buttons", Section: HomeButtons },
  { id: "home-desc", Section: Description },
];

export function HomePage() {
  return (
    <div className="home-main">
      {sections.map(({ id, Section }) => (
        <section key={id} className="home-section">
          <Section />
        </section>
      ))}
    </div>
  );
}

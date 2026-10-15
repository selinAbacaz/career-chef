import { Landing } from "./components/Landing";
import { HomeButtons } from "./components/HomeButtons";
import "@css/pages/HomePage.css";

const sections = [Landing, HomeButtons];

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

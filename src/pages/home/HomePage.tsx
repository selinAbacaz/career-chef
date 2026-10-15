import { Landing } from "./components/Landing";
import { HomeButtons } from "./components/HomeButtons";
import "@css/pages/HomePage.css";

export function HomePage() {
  const sections = [Landing, HomeButtons];

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

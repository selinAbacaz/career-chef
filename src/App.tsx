import { useGeneralStore } from "@utils/zustand/general-store";
import { Footer, Nav } from "@components";
import mainBg from "@assets/images/main-bg.jpg";
import "./App.css";

function App() {
  const Page = useGeneralStore((state) => state.currentElement);

  return (
    <main
      className="min-h-screen flex flex-col"
      style={{ backgroundImage: `url(${mainBg})` }}
    >
      <Nav />
      <div className="flex-1">
        <Page />
      </div>
      <Footer />
    </main>
  );
}

export default App;

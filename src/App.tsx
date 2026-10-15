import { useGeneralStore } from "@utils/zustand/general-store";
import { Footer, Nav } from "@components";
import mainBg from "@assets/images/main-bg.jpg";
import "./App.css";

function App() {
  // const [currentPage, setCurrentPage] = useState<number>(vistedWelcomePage === true && keyData !== "" ? 0 : 4 ); // Determines the current page of the webstie, represented as a number
  // const [blurPage, setBlurPage] = useState<boolean>(false); // Determines whether or not the page will be blurred
  // const [submitFlagBasic, setSubmitFlagBasic] = useState<boolean>(false); // Determines whether or not the basic questions have been submitted
  // const [submitFlagDetailed, setSubmitFlagDetailed] = useState<boolean>(false); // Determines whether or not the detailed questions have been submitted
  // const [questionsToUse, setQuestionsToUse] = useState<string>("basic"); // Determines what questions and answers chatGPT should use
  // const [submitted, setSubmitted] = useState<boolean>(false); // Determines whether or not any of the questions have been submitted
  // const [validKey, setValidKey] = useState<boolean>(keyData !== ""); // Determines wether or not the key the user submitted is valid
  // const [submittedNewKey, setSubmittedNewKey] = useState<boolean>(userSubmmittedNewKey); // Checks to see if the user has submitted a key at least once in a session

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

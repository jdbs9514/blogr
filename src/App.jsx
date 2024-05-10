import DesignSection from "./components/DesignSection";
import Footer from "./components/Footer";
import Information from "./components/Information";
import Intro from "./components/Intro";
import StateSection from "./components/StateSection";

function App() {

  return (
    <>
      <main>
        <Intro />
        <DesignSection />
        <StateSection />
        <Information />
        <Footer />
      </main>
    </>
  );
}

export default App;

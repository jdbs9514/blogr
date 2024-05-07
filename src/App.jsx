import DesignSection from "./components/DesignSection";
import Footer from "./components/Footer";
import Information from "./components/Information";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import StateSection from "./components/StateSection";

function App() {

  return (
    <>
      <main>
        <Navbar />
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

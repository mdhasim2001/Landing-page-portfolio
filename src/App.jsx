import { Home } from "./commponent/Home";
import { About } from "./commponent/About";
import { Services } from "./commponent/Services";
import { Work } from "./commponent/Work";
import { Contact } from "./commponent/Contact";
import { Footer } from "./commponent/Footer";
import { Navbar } from "./commponent/Navbar";

function App() {
  return (
    <div className="bg-black text-white text-opacity-60 min-w-lg ">
      <div className="mx-5 lg:w-4/5 pt-10 md:pt-5 lg:mx-auto">
        <Navbar />
        <Home />
        <About />
        <Services />
        <Work />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;

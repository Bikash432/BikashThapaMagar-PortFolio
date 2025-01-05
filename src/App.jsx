import { BrowserRouter } from "react-router-dom";

//import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarCanvas } from "./components";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact  from "./components/Contact";
import Experience from "./components/Experience";
import Feedbacks from "./components/Feedbacks";
import Hero from "./components/Hero";
import Tech from "./components/Tech";
import Works from "./components/Works";
import  StarCanvas  from "./components/canvas/Stars";
import AwardsCarousel from "./components/AwardsCarousel";
import AwardVideo from "./components/AwardVideo";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <AwardVideo />
        <AwardsCarousel />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

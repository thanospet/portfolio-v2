import { BrowserRouter } from "react-router-dom";
import StarsCanvas from "./components/canvas/Stars";
import {
  About,
  Contact,
  Experience,
  FeedBacks,
  Hero,
  Navbar,
  Tech,
  Works,
} from "./components";
import AuthContext from "./store/auth-context";
import AuthProvider from "./store/AuthProvider";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <FeedBacks />
        </div>
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;

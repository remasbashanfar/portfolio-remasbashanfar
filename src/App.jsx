import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
// import about from "public/assets/about.png"
// import technologies from "./components/technologies/technologies"
import Portfolio from "./components/portfolio/Portfolio"
import Works from "./components/works/Works"
// import aboutMe from "./aboutMe"
import Testimonials from "./components/testimonials/Testimonials"
import Contact from "./components/contact/Contact"
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
       <Intro/>
        <Works/>
       <Portfolio/>
       <Testimonials/>
       <Contact/>
     </div>
    </div>
  );
}

export default App;

import Home from "./components/Home page/Home/Home";
import {Routes,Route} from 'react-router-dom';
import About from "./components/About/About/About";
import Contact from "./components/Contact_page/Contact/Contact";
import UnderConstruction from "./components/UnderConstruction_page/UnderConstruction/UnderConstruction";
import skills from "./components/skills_page/skills/skills";
import skills_content from "./components/skills_page/skills_content/skills_content";

function App() {
  return (
    <div className="App">
        
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/myskill" element={<UnderConstruction />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/work" element={<UnderConstruction />}></Route>
        <Route path="/blogs" element={<UnderConstruction />}></Route>
        <Route path="/socials" element={<Home />}></Route>
        <Route path="*" element={<UnderConstruction />}></Route>
      </Routes>
    </div>
  );
}

export default App;

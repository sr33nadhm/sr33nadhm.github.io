import FAQ from "../components/faq/FAQ";
import NavBar from "../components/navbar/NavBar";
import Profile from "../components/profile/Profile";
import MoreProjects from "../components/projects/MoreProjects";
import Projects from "../components/projects/Projects";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <div className="main">
        <Profile />
        <Projects />
      </div>
      <div className="main">
        <MoreProjects />
      </div>
      <div className="main">
        <FAQ />
      </div>
    </>
  );
}

export default App;

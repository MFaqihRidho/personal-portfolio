import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Skill from "./components/skill";
import Certificate from "./components/certificate";
import Projects from "./components/projects";
import Footer from "./components/footer";
import Contact from "./components/contact";
import Intro from "./components/intro";

function App() {
    return (
        <div className="text-black scroll-smooth transition-all duration-300 dark:text-white font-Spartan bg-[url('https://i.postimg.cc/7LqP0TtN/light.jpg')] dark:bg-[url('https://i.postimg.cc/bwcwY5QW/dark.png')] flex flex-col min-h-screen">
            <Intro></Intro>
            <Navbar></Navbar>
            <Hero></Hero>
            <About></About>
            <Skill></Skill>
            <Certificate></Certificate>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
}
export default App;

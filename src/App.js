import "./App.css";
import Navbar from "./components/navbar";

function App() {
    return (
        <div className="text-black dark:text-white font-Spartan bg-[url('https://i.postimg.cc/7LqP0TtN/light.jpg')] dark:bg-[url('https://i.postimg.cc/bwcwY5QW/dark.png')] flex justify-center min-h-screen">
            <Navbar></Navbar>
        </div>
    );
}
export default App;

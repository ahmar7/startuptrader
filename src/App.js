import logo from "./logo.svg";
import "./App.css";
import "./assets/css/style.css";
import LogIn from "./pages/LogIn";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Routers from "./Routers/Routers";
function App() {
  return (
    <>
      <Routers />
    </>
  );
}

export default App;

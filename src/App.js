import logo from "./logo.svg";
import "./App.css";
import Router from "./config/Router";
import "./assets/css/style.css";
import LogIn from "./pages/LogIn";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Routers from "./Routers/Routers";
function App() {
  return (
    // <div className="">
    //   <Router />
   
    //   <p className="text-red-500">faizan</p>
    // </div>
 
    <>
    <Routers />
    {/* <Navbar />
       <Home />  */}
    </>
  );
}

export default App;

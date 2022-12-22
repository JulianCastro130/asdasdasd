import {
  Route,
  Routes,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Meets from "./pages/meet/Meets";


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/meets" element={<Meets/>}/>
    </Routes>
    </>
  );
}

export default App;

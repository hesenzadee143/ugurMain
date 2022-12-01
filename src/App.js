import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home" 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="examResults" element={"Imtahan Neticeleri"}></Route>
        <Route path="/Admistrator" element={<><h1>Login</h1> <h1>Sign</h1></>}></Route>
        <Route path="/XmLCjSoN" element={<>Tezliklə</>}></Route>
        <Route path="/*" element={<h1>Zəhmət olmasa Geri qayıdın.<br/> Burada Heç bir əməliyyat aparılmır</h1>}></Route>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;

import './index.css';
import Header from "./components/Header";
import Employees from "./page/Employees";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Dictionary from "./page/Dictionary";
import Definition from "./page/Definition";

function App() {
  return (
      <BrowserRouter>
          <Header>
              <Routes>
                  <Route path="/Employees" element={<Employees/>}/>
                  <Route path="/Dictionary" element={<Dictionary/>}/>
                  <Route path="/Definition" element={<Definition/>}/>
              </Routes>
          </Header>
      </BrowserRouter>
  )
}

export default App;

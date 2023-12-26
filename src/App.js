import './index.css';
import Header from "./components/Header";
import Employees from "./page/Employees";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Dictionary from "./page/Dictionary";

function App() {
  return (
      <BrowserRouter>
          <Header>
              <Routes>
                  <Route path="/Employees" element={<Employees/>}/>
                  <Route path="/Dictionary" element={<Dictionary/>}/>
              </Routes>
          </Header>
      </BrowserRouter>
  )
}

export default App;

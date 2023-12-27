import './index.css';
import Header from "./components/Header";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Dictionary from "./page/Dictionary";
import Definition from "./page/Definition";
import NotFound from "./components/NotFound";
import Customers from "./page/Customers";
import Customer from "./page/Customer";

function App() {
  return (
      <BrowserRouter>
          <Header>
              <Routes>
                  <Route path="/customers" element={<Customers/>}/>
                  <Route path="/customers/:id" element={<Customer/>}/>
                  <Route path="/dictionary" element={<Dictionary/>}/>
                  <Route path="/dictionary/:search" element={<Definition/>}/>
                  <Route path="/404" element={<NotFound/>}/>
                  <Route path="*" element={<NotFound/>}/>
              </Routes>
          </Header>
      </BrowserRouter>
  )
}

export default App;

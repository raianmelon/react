import './index.css';
import Employee from "./components/Employee";
import {useState} from "react";
function App() {
  const [role, setRole] = useState('dev')
  const showEmplyees = true
  return (
    <div className="App">
      {showEmplyees ?
          <>
            <input type='text' onChange={(e) => {console.log(e.target.value); setRole(e.target.value)}} />
            <Employee name="Caleb" role="Intern"/>
            <Employee name="Abby" role={role}/>
            <Employee name="John"/>
          </>
          :
          <p>You cannot see the employees</p>
      }

    </div>
  );
}

export default App;

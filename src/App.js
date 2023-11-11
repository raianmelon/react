import './index.css';
import Employee from "./components/Employee";
import {useState} from "react";
import {v4 as uuidv4} from 'uuid'
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee";
function App() {
  const [role, setRole] = useState('dev')
  const [employees, setEmployees] = useState(
      [
        {
            id: 1,
          name: "Raian",
          role: "Developer",
          img:"https://tailwindcss.com/img/erin-lindford.jpg",
        },
        {
            id: 2,
          name: "Lorenzo",
          role: "Programer",
          img:"https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699315200&semt=sph",
        },
        {
            id: 3,
          name: "Adrijano",
          role: "Stolar",
          img:"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg",
        },
        {
            id: 4,
          name: "Sara",
          role: "Pekarica",
          img:"https://st4.depositphotos.com/6903990/27898/i/450/depositphotos_278981062-stock-photo-beautiful-young-woman-clean-fresh.jpg",
        },
        {
            id: 5,
          name: "Viljano",
          role: "Vrtlar",
          img:"https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?cs=srgb&dl=pexels-italo-melo-2379005.jpg&fm=jpg",
        },
  ]
  )
    function updateEmployee(id, newName, newRole) {
        const updatedEmployees = employees.map((employee) => {
            if(id === employee.id) {
                return {...employee, name: newName, role:newRole}
            }
            return employee
        })
        setEmployees(updatedEmployees)
    }

    function addEmployee(name, role, img) {
      let newEmployee = {id: uuidv4(),name, role, img}
      setEmployees([...employees, newEmployee])
    }
  const showEmplyees = true
  return (
    <div className="App">
      {showEmplyees ?
          <>
            <input type='text' onChange={(e) => {console.log(e.target.value); setRole(e.target.value)}} />
            <div className="flex flex-wrap justify-center">
                {employees.map((employee) => {
                    const editEmployee = <EditEmployee id={employee.id} name={employee.name} role={employee1.role} updateEmployee={updateEmployee}/>
                    return(
                        <Employee key={employee.id} id={employee.id} name={employee.name} role={employee.role} img={employee.img} editEmployee={editEmployee}/>
                    )
                })}
            </div>
            <AddEmployee newEmployee={addEmployee}/>
          </>
          :
          <p>You cannot see the employees</p>
      }

    </div>
  );
}

export default App;

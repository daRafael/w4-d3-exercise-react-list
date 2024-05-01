import "./App.css";
import StudentsList from "./StudentsList";

const STUDENTS = [
  { id: 1, name: "Edir" },
  { id: 2, name: "Francisco" },
  { id: 3, name: "Lafaiete" },
  { id: 4, name: "Manuele" },
  { id: 5, name: "Natan" },
  { id: 6, name: "Rafael" },
];

function App() {
  return (
    <div>
      <h1>Students List</h1>
      {<StudentsList  students={STUDENTS}/>}
    </div>
  );
}

export default App;

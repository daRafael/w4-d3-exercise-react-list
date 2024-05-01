import { useState } from "react";
import StudentCard from "./StudentCard";
import "./StudentsList.css";

export default function StudentsList({ students }) {
  // useState for the students items
  const [items, setItems] = useState(students);
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const addItem = () => {
    if(name === '') return;

    const id = items.length + 1;
    setItems([...items, {id, name}]);

    setName('');
  }

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  }

  return (
    <div className="wrapper">
      <div>
        <div className="form-wrapper">
          {<input placeholder='Write your name' type="text" value={name} onChange={handleChange} />}
          {<button onClick={addItem}>Add</button>}
        </div>
      </div>
      <ul>
        {items.map((item) => {
          return <StudentCard key={item.id} student={item} deleteItem={deleteItem}/>
        })}
      </ul>
    </div>
  );
}

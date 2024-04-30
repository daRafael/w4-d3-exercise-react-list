import { useState } from "react";
import "./StudentsList.css";

export default function StudentsList({ students }) {
  // useState for the students items

  return (
    <div className="wrapper">
      <div>
        <div className="form-wrapper">
          {/* <input type="text" value={name} onChange={handleChange} /> */}
          {/* <button onClick={addItem}>Add</button> */}
        </div>
      </div>
      <ul>{/* Render students here */}</ul>
    </div>
  );
}

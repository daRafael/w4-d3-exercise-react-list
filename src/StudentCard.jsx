

const StudentCard = ({student, deleteItem}) => {
  return (
    <li>
      {student.name}
      <button onClick={() => {deleteItem(student.id)}}>x</button>
    </li>
  )
}

export default StudentCard;
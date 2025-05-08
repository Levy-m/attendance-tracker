import { useState } from 'react';
import StudentList from './StudentList';

// TODO 1: Add a resetAttendance function to mark all students as absent


function App() {
  const initialStudents = [
    { id: 1, name: 'Alice', present: false },
    { id: 2, name: 'Bob', present: false },
    { id: 3, name: 'Charlie', present: false },
    { id: 4, name: 'Diana', present: false }
  ];

  const [ students, setStudents] = useState(initialStudents);

  // TODO 2: Create a toggleAttendance function and pass it to StudentList
  const toggleAttendance = (id) => {
    const updatedList = students.map(
      (s) => {
        if(s.id === id){
          return { ...s, present: !s.present }
        } else {
          return s
        }
      }
    )

    setStudents(updatedList);

  }

  const presentCount = students.filter( (s) => s.present).length

  return (
    <div className='container'>
      <h1>🏫 Attendance Tracker</h1>
      <p>Present: {presentCount} / 4 </p>

      {/* TODO 3: Add a Reset Attendance button here */}
      <StudentList
        onToggle = {toggleAttendance}
        students={students}
     />
    </div>
  );
}

export default App;

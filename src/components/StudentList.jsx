import Student from './Student';

function StudentList({ students, onToggle }) {

  const mapper = (student) => {
    return <Student key={student.id} student={student} onToggle={onToggle}/>
  }

   const mappedStudents = students.map(mapper) 

   return (
    <div>
      {/* TODO 4: Map through students and render Student components */}
      {mappedStudents}
    </div>
  );
}

export default StudentList;

import Student from "./Student";

const StudentList = (props) => {
  console.log(props, 'student')
  return (
    <>
    {/* {props.name} */}
    {props.students.map((student, idx) =>
    <Student student={student} key={idx}/>
    )}
  </>
  );
}

export default StudentList;
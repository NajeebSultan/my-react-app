
function Student(props){
  return( 
    <div className="student">
      <p>Name: {props.name} </p>
      <p>Age: {props.age} </p>
      <p>Student:{props.isStudent ? "yes" : "No"}  </p>
    </div>
  );
}
Student.propTypes ={
  name : propTypes.string,
  age : propTypes.number,
  isStudent: PropType.bool,
}
export default Student;
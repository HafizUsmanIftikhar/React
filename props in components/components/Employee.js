function Employee(props) {
  return (
    <>
      <h3>Employee {props.name}</h3>
      <p> {props.role ? props.role : "no role"}</p>
      

      <p>
        {" "}
        {props.role ? (
          <p class="role"> {props.role}</p>
        ) : (
          <p class="no role">no role</p>
        )}
      </p>
    </>
  );
}

export default Employee;

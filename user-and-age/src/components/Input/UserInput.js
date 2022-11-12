import "./UserInput.css";
const UserInput = (props) => {
  const usernameHandler = (event) => {
    props.setUsername(event.target.value);
  };
  return (
    <div className="userInput">
      <label className="userLabel">Username</label>
      <input onChange={usernameHandler} id="username" type="text"></input>
    </div>
  );
};

export default UserInput;

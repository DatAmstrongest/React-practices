import Card from "./UI/Card";
import UserInput from "./Input/UserInput";
import AgeInput from "./Input/AgeInput";
import "./UserForm.css";
import { useState } from "react";
const UserForm = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    if (username === "") {
      props.setIsUsernameCorrect(false);
      return;
    }
    if (age === "") {
      props.setIsAgeCorrect(false);
      return;
    }
    if (isNaN(age) || parseInt(age) < 0) {
      props.setIsAgeCorrect(false);
      return;
    } else {
      props.addUser(username, age);
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <Card>
        <UserInput username={username} setUsername={setUsername} />
        <AgeInput age={age} setAge={setAge} />
        <button>Add User</button>
      </Card>
    </form>
  );
};

export default UserForm;

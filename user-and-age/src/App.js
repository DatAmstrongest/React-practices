import UserForm from "./components/UserForm";
import UsersList from "./components/Users/UsersList";
import ErrorModal from "./components/Modal/ErrorModal";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [isUsernameCorrect, setIsUsernameCorrect] = useState(true);
  const [isAgeCorrect, setIsAgeCorrect] = useState(true);
  const addUser = (username, age) => {
    setData((previousData) => {
      const updatedGoals = [...previousData];
      updatedGoals.unshift({
        username: username,
        age: age,
        id: Math.random().toString(),
      });
      console.log(updatedGoals);
      return updatedGoals;
    });
  };
  return (
    <>
      <UserForm
        data={data}
        addUser={addUser}
        setIsUsernameCorrect={setIsUsernameCorrect}
        setIsAgeCorrect={setIsAgeCorrect}
      />
      {data.length > 0 ? <UsersList users={data} /> : null}
      {!isUsernameCorrect ? (
        <ErrorModal
          isAgeCorrect={setIsAgeCorrect}
          isUsernameCorrect={setIsUsernameCorrect}
          text="Please enter a valid name and age (non-empty values)"
        />
      ) : null}
      {!isAgeCorrect ? (
        <ErrorModal
          isAgeCorrect={setIsAgeCorrect}
          isUsernameCorrect={setIsUsernameCorrect}
          text="Please enter a valid name and age (non-empty values)"
        />
      ) : null}
    </>
  );
}

export default App;

import "./UserInput.css";
const AgeInput = (props) => {
  const ageHandler = (event) => {
    props.setAge(event.target.value);
  };
  return (
    <div className="userInput">
      <label className="userLabel">Age (Years)</label>
      <input onChange={ageHandler} id="username" type="text"></input>
    </div>
  );
};

export default AgeInput;

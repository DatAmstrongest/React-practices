import "./UserItem.css";
const UserItem = (props) => {
  return (
    <li>
      <p>
        {props.username} ({props.age} years old)
      </p>
    </li>
  );
};

export default UserItem;

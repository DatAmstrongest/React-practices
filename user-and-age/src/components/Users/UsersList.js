import Card from "../UI/Card";
import UserItem from "./UserItem";
import "./UsersList.css";
const UsersList = (props) => {
  return (
    <Card>
      <ul>
        {props.users.map((user) => (
          <UserItem username={user.username} age={user.age} key={user.id} />
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;

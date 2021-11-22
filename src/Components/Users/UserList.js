import react, { UseState } from "react";
import Card from "../UI/Card";
import style from "./UserList.module.css";

const UserList = (props) => {
  return (
    <Card className={style.users}>
      <ul>
        {props.users.map((user) => (
          <li>
            {user.name} {user.age} Years Old
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;

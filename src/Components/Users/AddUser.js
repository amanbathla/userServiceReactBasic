import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import React, { useState } from "react";
import ErrorModule from "../UI/ErrorModule";

import Card from "../UI/Card";

const AddUser = (props) => {
  const [enteredUsername, setUsername] = useState("");

  const [enteredAge, setAge] = useState("");
  const [error, setError] = useState();

  const onChangeUserNameHandler = (event) => {
    setUsername(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  // handle user Inputs i.e. age and username and change the data accoridngly
  const onAgeChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const addUserClickHandler = (event) => {
    event.preventDefault();
    console.log(styles);

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "An Error Occured!",
        message: "please enter a valid username!!!",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "An Error Occured!",
        message: "please enter a valid age > 0",
      });
      return;
    }

    props.onAddUser(enteredUsername, enteredAge);
    setUsername("");
    setAge("");
  };

  return (
    <div>
      {error && (
        <ErrorModule
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form>
          <label htmlFor="userName">UserName</label>
          <input
            id="userName"
            type="text"
            value={enteredUsername}
            onChange={onChangeUserNameHandler}
          />

          <label htmlFor="age">Age(In Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={onAgeChangeHandler}
          />

          <Button type="submit" onClick={addUserClickHandler}>
            {" "}
            Add User
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;

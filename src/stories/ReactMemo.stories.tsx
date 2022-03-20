import React from "react";
import {Story} from "@storybook/react";
import {useState} from "react";

export default {
  title: "HOC/React.memo",
};

const NewMessagesCount = (props: {count: number}) => {
  console.log("Counter rendering");
  return <div>{props.count}</div>;
};

const Users = (props: {users: string[]}) => {
  console.log("Users rendering");
  return (
    <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
  );
};

const UsersContainer = React.memo(Users);

export const Example: Story = () => {
  console.log("Example rendering");

  const [counter, setCounter] = useState<number>(0);
  const [users, setUsers] = useState(["Alex", "Karina", "Alexander", "Svetlana"]);

  const addUser = () => {
    setUsers([...users, "Lavi"]);
  };

  // users.push("Lavi " + new Date().getTime());

  return (
    <>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={addUser}>Add user</button>
      <NewMessagesCount count={counter}/>
      <UsersContainer users={users}/>
    </>
  );
};
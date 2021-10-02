import React, {useState} from "react";

export default {
    title: "React.memo demo"
}

const NewMessagesCounter = (props: {count: number}) => {
    return <div>{props.count}</div>
}

const Users = (props: {users: Array<any>}) => {
    console.log("Users");
    return <div>{props.users.map((u,i) => <div key={i}>{u}</div>)}</div>
}

const Table = React.memo(Users);

export const Example1 = () => {
    console.log("Example1");
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(["Dimych", "Valera", "Artem", "Katya"])

    return <>
        <button onClick={() => setCounter(counter => counter + 1)}>+</button>
        <button onClick={() => setUsers([...users, "Alex"])}>Add user</button>
        <NewMessagesCounter count={counter}/>
        <Table users={users}/>
    </>
}
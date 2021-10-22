import React, {useEffect, useState} from "react";

export default {
    title: "useEffect demo"
}

export const UseEffectExample = () => {
    console.log("UseEffect Example rendered");
    const [fake, setFake] = useState(0);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log("useEffect rendered, no dependencies");
        document.title = counter.toString();
        //api.getUsers().then('');
        //setInterval
        //indexedDB
        //document.getElementById
        //document.title = "User"
    });

    useEffect(() => {
        console.log("useEffect rendered, empty dependencies");
        document.title = counter.toString();
    }, []);

    useEffect(() => {
        console.log("useEffect rendered, with dependencies");
        document.title = counter.toString();
    }, [counter]);

    return (
        <>
            Hello, {counter} and {fake}
            <button onClick={() => setCounter(counter + 1)}>Counter +</button>
            <button onClick={() => setFake(fake + 1)}>Fake +</button>
        </>
    );
}
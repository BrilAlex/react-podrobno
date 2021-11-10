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

export const UseEffectSetTimeoutAndSetIntervalExample = () => {
    console.log("UseEffect SetTimeout And SetInterval Example rendered");
    const [fake, setFake] = useState(0);
    const [counter, setCounter] = useState(0);
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        console.log("useEffect setTimeout called");
        setTimeout(() => {
            console.log("setTimeout");
            document.title = counter.toString();
        }, 1000);
    }, [counter]);

    useEffect(() => {
        console.log("useEffect setInterval called");
        setInterval(() => {
            console.log("setInterval " + timer);
            setTimer(state => state + 1);
        }, 1000);
    }, []);

    return (
        <>
            Timer: {timer}<br/>
            Hello, counter: {counter} and fake: {fake}<br/>
            <button onClick={() => setCounter(counter + 1)}>Counter +</button>
            <button onClick={() => setFake(fake + 1)}>Fake +</button><br/>
        </>
    );
}

export const UseEffectTimeExample = () => {
    const [date, setDate] = useState<Date>();

    useEffect(() => {
        setInterval(() => {
            setDate(new Date());
        }, 1000);
    }, []);

    let time = date?.toLocaleTimeString();

    return (
        <>
            Current time: {time}
        </>
    );
}

export const ResetUseEffectExample = () => {
    const [counter, setCounter] = useState(0);

    console.log("Reset Component rendered: " + counter);

    useEffect(() => {
        console.log("Effect occurred: " + counter);

        return () => console.log("Reset Effect: " + counter);
    }, [counter]);

    const increase = () => setCounter(counter + 1);

    return (
        <>
            Counter: {counter}
            <button onClick={increase}>+</button>
        </>
    );
}

export const KeyTrackerExample = () => {
    const [text, setText] = useState("");

    console.log("Component rendered with: " + text);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key);
            setText(text + e.key);
        };

        window.addEventListener("keypress", handler);
        return () => window.removeEventListener("keypress", handler);
    }, [text]);

    return <>Typed text: {text}</>;
}

export const ResetSetTimeoutExample = () => {
    const [text, setText] = useState("");

    console.log("Component rendered with: " + text);

    useEffect(() => {
        const timeoutID = setTimeout(() => {
            console.log("Timeout expired");
            setText("3 seconds passed");
        }, 3000);
        return () => clearTimeout(timeoutID);
    }, []);

    return <>Text: {text}</>;
}
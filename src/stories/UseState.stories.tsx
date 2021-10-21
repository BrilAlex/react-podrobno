import React, {useMemo, useState} from "react";

export default {
    title: "useState demo"
}

function generateData() {
    //difficult counting
    console.log("Generate Data");
    return 1;
}

export const UseStateExample = () => {
    console.log("UseStateExample rendered");

    //const initValue = useMemo(generateData, []);

    const [counter, setCounter] = useState(generateData);
    const changer = (state: number) => {
        return state +1;
    }

    return <>
        <button onClick={() => setCounter(changer)}>+</button>
        {counter}
    </>
}
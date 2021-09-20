import React, {useRef, useState} from "react";

export default {
    title: "Uncontrolled input"
}

export const UncontrolledInput = () => <input/>;

export const TrackValueOfUncontrolledInput = () => {
    const [inputValue, setInputValue] = useState<string>("");
    return <>
        <input onChange={
                (e) => setInputValue(e.currentTarget.value)
            }
        /> - <span>Value from input: {inputValue}</span>
    </>;
};

export const GetValueOfUncontrolledInputOnButtonPress = () => {
    const [inputValue, setInputValue] = useState<string>("");
    const inputRef = useRef<HTMLInputElement>(null);

    const onButtonClickHandler = () => {
        const element = inputRef.current as HTMLInputElement;
        setInputValue(element.value);
    }

    return <>
        <input ref={inputRef}/> -
        <button onClick={onButtonClickHandler}>Get value</button> -
        <span>Value from input: {inputValue}</span>
    </>;
};
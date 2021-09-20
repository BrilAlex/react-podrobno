import React, {ChangeEvent, useState} from "react";

export default {
    title: "Controlled input"
}

export const ControlledInputWithFixedValue = () => <input value={"it-incubator.by"}/>;

export const ControlledInput = () => {
    const [inputStateValue, setInputStateValue] = useState<string>("");
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputStateValue(e.currentTarget.value);
    }

    return <input value={inputStateValue} onChange={onChangeInputHandler}/>;
}

export const ControlledCheckbox = () => {
    const [checkboxStateValue, setCheckboxStateValue] = useState<boolean>(false);
    return <input
        type={"checkbox"}
        checked={checkboxStateValue}
        onChange={(e) =>
            setCheckboxStateValue(e.currentTarget.checked)
        }
    />;
}

export const ControlledSelect = () => {
    const [selectStateValue, setSelectStateValue] = useState<string | undefined>(undefined);
    const onClickOptionHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectStateValue(e.currentTarget.value);
    }
    return <select value={selectStateValue} onChange={onClickOptionHandler}>
        <option>None</option>
        <option value={"1"}>Minsk</option>
        <option value={"2"}>Moscow</option>
        <option value={"3"}>Kiev</option>
    </select>;
}
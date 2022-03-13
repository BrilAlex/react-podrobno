import {Story} from "@storybook/react";
import {ChangeEvent, useRef, useState} from "react";

export default {
  title: "HTML Tags/Input Stories"
};

export const UncontrolledInput: Story = () => <input/>;
export const ControlledInput: Story = () => <input value={"Input value"}/>;
export const UncontrolledInputWithTrackedValue: Story = () => {
  const [value, setValue] = useState("");
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  return <><input onChange={onChangeHandler}/> - Value in useState: {value}</>;
};
export const UncontrolledInputValueOnButtonClick: Story = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const onClickHandler = () => {
    const inputEl = inputRef.current as HTMLInputElement;
    setValue(inputEl.value);
  };

  return <>
    <input ref={inputRef}/>
    <button onClick={onClickHandler}>Save value</button> - Value is useState: {value}
  </>;
};
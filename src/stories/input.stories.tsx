import {Story} from "@storybook/react";
import {ChangeEvent, useRef, useState} from "react";

export default {
  title: "HTML Tags/Input, Checkbox, Select Stories"
};

export const UncontrolledInput: Story = () => <input/>;

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
    <button onClick={onClickHandler}>Save value</button>
    - Value is useState: {value}
  </>;
};

export const ControlledInput: Story = () => {
  const [value, setValue] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  return <input value={value} onChange={onChange}/>;
};

export const ControlledCheckbox: Story = () => {
  const [checked, setChecked] = useState(true);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.currentTarget.checked);
  };

  return <input type={"checkbox"} checked={checked} onChange={onChange}/>
};

export const ControlledSelect: Story = () => {
  const [selectValue, setSelectValue] = useState<string | undefined>(undefined);

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.currentTarget.value);
  };

  return (
    <select value={selectValue} onChange={onChange}>
      <option>none</option>
      <option value={"1"}>Minsk</option>
      <option value={"2"}>London</option>
      <option value={"3"}>New York</option>
    </select>
  );
};

export const ControlledInputWithFixedValue: Story = () => <input value={"Fixed value"}/>;
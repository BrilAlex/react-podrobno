import {Story} from "@storybook/react";
import {useEffect, useState} from "react";

export default {
  title: "Hooks/useEffect",
}

export const UseEffectExample: Story = () => {
  console.log("useEffect Example");
  const [counter1, setCounter1] = useState(1);
  const [counter2, setCounter2] = useState(1);

  useEffect(() => {
    console.log("useEffect without dependencies. Fires every render.");
  });
  useEffect(() => {
    console.log("useEffect with empty dependencies. Fires only on first render.");
  }, []);
  useEffect(() => {
    console.log("useEffect with one dependency. Fires on first render and when counter1 changes.");
  }, [counter1]);

  return (
    <div>
      Hello, {counter1}, {counter2}
      <button onClick={() => setCounter1(counter1 + 1)}>inc counter1</button>
      <button onClick={() => setCounter2(counter2 + 1)}>inc counter2</button>
    </div>
  );
};
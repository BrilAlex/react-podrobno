import {Story} from "@storybook/react";
import {useState} from "react";

export default {
  title: "Hooks/useState"
}

function generateData() {
  // difficult counting
  console.log("Generate data");
  return 0;
}

export const UseStateExample: Story = () => {
  console.log("useState Example");
  const [counter, setCounter] = useState<number>(generateData);

  return (
    <div>
      {counter}
      <button onClick={()=>setCounter(state => state + 1)}>+</button>
    </div>
  );
};
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
      Hello, Counter1 - {counter1}, Counter2 - {counter2}
      <button onClick={() => setCounter1(counter1 + 1)}>inc counter1</button>
      <button onClick={() => setCounter2(counter2 + 1)}>inc counter2</button>
    </div>
  );
};

export const UseEffectWithSetTimeoutExample: Story = () => {
  console.log("useEffect With setTimeout Example");
  const [counter1, setCounter1] = useState(1);
  const [counter2, setCounter2] = useState(1);

  useEffect(() => {
    console.log("useEffect fired.");
    const timeout_ID = setTimeout(() => {
      console.log("Five seconds passed. Counter1 value: " + counter1);
    }, 5000);

    return () => {
      clearTimeout(timeout_ID);
    };
  }, [counter1]);

  return (
    <div>
      Counter1 - {counter1}, Counter2 - {counter2}
      <button onClick={() => setCounter1(counter1 + 1)}>inc counter1</button>
      <button onClick={() => setCounter2(counter2 + 1)}>inc counter2</button>
    </div>
  );
};

export const UseEffectWithSetIntervalExample: Story = () => {
  console.log("useEffect With setInterval Example");
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    console.log("useEffect fired.");
    const interval_ID = setInterval(() => {
      console.log("Counter value: " + counter);
      setCounter(state => state + 1);
    }, 1000);

    return () => {
      clearInterval(interval_ID);
    };
  }, []);

  return (
    <div>
      Counter - {counter}
    </div>
  );
};

export const UseEffectClockExample: Story = () => {
  console.log("useEffect Clock Example");
  const [time, setTime] = useState<string>();

  useEffect(() => {
    console.log("useEffect fired.");
    const interval_ID = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(interval_ID);
    };
  }, []);

  return (
    <div>
      Current time - {time}
    </div>
  );
};

export const ResetEffectExample: Story = () => {
  const [counter, setCounter] = useState(1);
  console.log("Component rendered. Counter value: " + counter);

  useEffect(() => {
    console.log("Effect occurred. Counter value: " + counter);
    return () => {
      console.log("Effect was reset. Counter value: " + counter);
    };
  }, [counter]);

  const increase = () => setCounter(counter + 1);

  return (
    <div>
      Hello, counter: {counter}
      <button onClick={increase}>+</button>
    </div>
  );
};

export const KeysTrackerExample: Story = () => {
  const [text, setText] = useState("");
  console.log("Component rendered. Text value: " + text);

  useEffect(() => {
    const keypressHandler = (e: KeyboardEvent) => {
      console.log("Typed text: " + text + e.key);
      setText(text + e.key);
    };

    window.addEventListener("keypress", keypressHandler);

    return () => {
      window.removeEventListener("keypress", keypressHandler);
    };
  }, [text]);

  return (
    <div>
      Typed text: {text}
    </div>
  );
};

export const SetTimeoutExample: Story = () => {
  const [text, setText] = useState("");
  console.log("Component rendered. Text value: " + text);

  useEffect(() => {
    const timeout_ID = setTimeout(() => {
      console.log("Timeout expired");
      setText("3 seconds passed");
    }, 3000);

    return () => {
      clearTimeout(timeout_ID);
    };
  }, [text]);

  return (
    <div>
      Typed text: {text}
    </div>
  );
};
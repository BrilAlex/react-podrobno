import {Clock, ClockPropsType} from "./Clock";
import {Story} from "@storybook/react";
import {useState} from "react";

export default {
  title: "Components/Clock",
  component: Clock,
};

const Template:Story<ClockPropsType> = (args) => <Clock {...args}/>

export const DigitalMode = Template.bind({});
DigitalMode.args = {
  analogMode: false,
};

export const AnalogMode = Template.bind({});
AnalogMode.args = {
  analogMode: true,
};

export const ModeChanging: Story = () => {
  console.log("Clock Mode Changing Example");
  const [analogMode, setAnalogMode] = useState<boolean>(false);

  const changeClockMode = () => {
    setAnalogMode(!analogMode);
  };

  return (
    <div>
      <button onClick={changeClockMode}>Change clock mode</button>
      <Clock analogMode={analogMode}/>
    </div>
  );
};
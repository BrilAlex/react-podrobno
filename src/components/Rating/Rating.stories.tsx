import {Rating, RatingPropsType} from "./Rating";
import {Story} from "@storybook/react";
import {useState} from "react";
import {RatingValueType} from "../../App";
import {action} from "@storybook/addon-actions";

export default {
  title: "Components/Rating",
  component: Rating,
  argsType: {
    starColor: {control: "color"},
  },
};

const callbackAction = action("Rating changed");

const Template: Story<RatingPropsType> = (args) => <Rating {...args}/>;

export const Stars0 = Template.bind({});
Stars0.args = {
  value: 0,
  setRatingValue: callbackAction,
};

export const Stars1 = Template.bind({});
Stars1.args = {
  value: 1,
  setRatingValue: callbackAction,
};

export const Stars2 = Template.bind({});
Stars2.args = {
  value: 2,
  setRatingValue: callbackAction,
};

export const Stars3 = Template.bind({});
Stars3.args = {
  value: 3,
  setRatingValue: callbackAction,
};

export const Stars4 = Template.bind({});
Stars4.args = {
  value: 4,
  setRatingValue: callbackAction,
};

export const Stars5 = Template.bind({});
Stars5.args = {
  value: 5,
  setRatingValue: callbackAction,
};

export const ChangesValue: Story<RatingPropsType> = (args) => {
  const [value,setValue] = useState<RatingValueType>(0);
  return <Rating {...args} value={value} setRatingValue={setValue}/>;
};
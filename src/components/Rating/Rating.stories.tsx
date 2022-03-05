import {Rating, RatingPropsType} from "./Rating";
import {Story} from "@storybook/react";
import {useState} from "react";
import {RatingValueType} from "../../App";
import {action} from "@storybook/addon-actions";

export default {
  title: "Components/Rating",
  component: Rating,
};

const actionCallback = action("Rating changed");

const Template: Story<RatingPropsType> = (args) => <Rating {...args}/>;

export const Rating0Stars = Template.bind({});
Rating0Stars.args = {
  value: 0,
  setRatingValue: actionCallback,
};

export const Rating1Star = Template.bind({});
Rating1Star.args = {
  value: 1,
  setRatingValue: actionCallback,
};

export const Rating2Stars = Template.bind({});
Rating2Stars.args = {
  value: 2,
  setRatingValue: actionCallback,
};

export const Rating3Stars = Template.bind({});
Rating3Stars.args = {
  value: 3,
  setRatingValue: actionCallback,
};

export const Rating4Stars = Template.bind({});
Rating4Stars.args = {
  value: 4,
  setRatingValue: actionCallback,
};

export const Rating5Stars = Template.bind({});
Rating5Stars.args = {
  value: 5,
  setRatingValue: actionCallback,
};

export const RatingChanges: Story<RatingPropsType> = (args) => {
  const [value,setValue] = useState<RatingValueType>(0);
  return <Rating {...args} value={value} setRatingValue={setValue}/>;
};
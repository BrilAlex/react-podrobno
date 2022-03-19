import {UncontrolledRating, UncontrolledRatingPropsType} from "./UncontrolledRating";
import {Story} from "@storybook/react";
import {action} from "@storybook/addon-actions";

export default {
  title: "Components/Uncontrolled Rating",
  component: UncontrolledRating,
  argsType: {
    starColor: {control: "color"},
  },
};

const callbackAction = action("Rating changed");

const Template: Story<UncontrolledRatingPropsType> = (args) =>
  <UncontrolledRating {...args}/>;

export const Rating0 = Template.bind({});
Rating0.args = {
  defaultValue: 0,
  setRatingValue: callbackAction,
};

export const Rating1 = Template.bind({});
Rating1.args = {
  defaultValue: 1,
  setRatingValue: callbackAction,
};

export const Rating2 = Template.bind({});
Rating2.args = {
  defaultValue: 2,
  setRatingValue: callbackAction,
};

export const Rating3 = Template.bind({});
Rating3.args = {
  defaultValue: 3,
  setRatingValue: callbackAction,
};

export const Rating4 = Template.bind({});
Rating4.args = {
  defaultValue: 4,
  setRatingValue: callbackAction,
};

export const Rating5 = Template.bind({});
Rating5.args = {
  defaultValue: 5,
  setRatingValue: callbackAction,
};

export const RatingChanges = Template.bind({});
RatingChanges.args = {
  defaultValue: 3,
  setRatingValue: callbackAction,
};
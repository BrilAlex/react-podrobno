import {UncontrolledRating} from "./UncontrolledRating";
import {Story} from "@storybook/react";

export default {
  title: "Components/Uncontrolled Rating",
  component: UncontrolledRating,
};

const Template: Story = () => <UncontrolledRating/>;

export const RatingChanges = Template.bind({});
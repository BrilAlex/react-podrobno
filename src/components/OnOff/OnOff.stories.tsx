import React, {useState} from "react";
import {OnOff} from "./OnOff";
import {ComponentStory} from "@storybook/react";
import {action} from "@storybook/addon-actions";

export default {
    title: "Components/OnOff",
    component: OnOff
};

const actionCallback = action("Mode changed");

const Template: ComponentStory<typeof OnOff> = (args) => <OnOff {...args}/>;

export const OnMode = Template.bind({});
OnMode.args = {
    status: true,
    callback: actionCallback
};

export const OffMode = Template.bind({});
OffMode.args = {
    status: false,
    callback: actionCallback
};

export const ChangingMode: ComponentStory<typeof OnOff> = (args) => {
    const [isOn, setIsOn] = useState<boolean>(false);
    return <OnOff status={isOn} callback={setIsOn}/>;
}
ChangingMode.args = {

}
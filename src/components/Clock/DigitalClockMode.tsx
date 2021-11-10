import React from "react";
import { ClockModePropsType } from "./Clock";

function getFormattedTimeString(time: number) {
    return time < 10 ? "0"+time : time;
}

export const DigitalClockMode:React.FC<ClockModePropsType> = (props) => {
    return <>
        <span>{getFormattedTimeString(props.date.getHours())}</span>
        :
        <span>{getFormattedTimeString(props.date.getMinutes())}</span>
        :
        <span>{getFormattedTimeString(props.date.getSeconds())}</span>
    </>;
};
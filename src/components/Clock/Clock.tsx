import React, {useEffect, useState} from "react";
import {DigitalClockMode} from "./DigitalClockMode";
import {AnalogClockMode} from "./AnalogClockMode";

type ClockPropsType = {
    mode: "digital" | "analog"
}

export type ClockModePropsType = {
    date: Date
}



export const Clock: React.FC<ClockPropsType> = (props) => {
    const [date, setDate] = useState<Date>(new Date());

    useEffect(() => {
        const interval_ID = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(interval_ID);
        }
    }, []);

    let view;
    switch(props.mode) {
        case "analog":
            view = <AnalogClockMode date={date}/>;
            break;
        case "digital":
        default:
            view = <DigitalClockMode date={date}/>;
    }

    return <div>
        Current time:
        <br/>
        {view}
    </div>
}
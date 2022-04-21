import {FC, useEffect, useState} from "react";
import s from "./Clock.module.css";
import {ClockDigitalView} from "./ClockDigitalView";
import {ClockAnalogView} from "./ClockAnalogView";

export type ClockPropsType = {
  mode?: "digital" | "analog";
};

export type ClockViewPropsType = {
  date: Date
};

export const Clock: FC<ClockPropsType> = (props) => {
  console.log("Clock");
  const [date, setDate] = useState<Date>(new Date());

  useEffect(() => {
    console.log("useEffect in Clock fired.");
    const interval_ID = setInterval(() => {
      console.log("Tick");
      setDate(new Date());
    }, 1000);

    return () => {
      console.log("Interval cleared");
      clearInterval(interval_ID);
    };
  }, []);

  let view;
  switch (props.mode) {
    case "analog":
      view = <ClockAnalogView date={date}/>;
      break;
    case "digital":
    default:
      view = <ClockDigitalView date={date}/>;
  }

  return (
    <div className={s.clock}>
      {view}
    </div>
  );
};
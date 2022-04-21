import {ClockViewPropsType} from "./Clock";
import {FC} from "react";
import s from "./Clock.module.css";

const formatTimeString = (time: number) => time < 10 ? `0${time}` : time;

export const ClockDigitalView: FC<ClockViewPropsType> = ({date}) => {
  return (
    <div className={s.digitalClock}>
      <span>{formatTimeString(date.getHours())}</span>
      :
      <span>{formatTimeString(date.getMinutes())}</span>
      :
      <span>{formatTimeString(date.getSeconds())}</span>
    </div>
  );
};
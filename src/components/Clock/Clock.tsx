import {FC, useEffect, useState} from "react";
import s from "./Clock.module.css";

export type ClockPropsType = {
  analogMode: boolean
};

const formatTimeString = (time: number) => time < 10 ? `0${time}` : time;

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

  const hoursStyle = {transform: `rotateZ(${date.getHours() * 30}deg)`};
  const minStyle = {transform: `rotateZ(${date.getMinutes() * 6}deg)`};
  const secStyle = {transform: `rotateZ(${date.getSeconds() * 6}deg)`};

  return (
    <div className={s.clock}>
      {props.analogMode ?
        <div className={s.analogClock}>
          <div className={s.hourHand} style={hoursStyle}/>
          <div className={s.minHand} style={minStyle}/>
          <div className={s.secHand} style={secStyle}/>
          <span className={s.twelve}>12</span>
          <span className={s.one}>1</span>
          <span className={s.two}>2</span>
          <span className={s.three}>3</span>
          <span className={s.four}>4</span>
          <span className={s.five}>5</span>
          <span className={s.six}>6</span>
          <span className={s.seven}>7</span>
          <span className={s.eight}>8</span>
          <span className={s.nine}>9</span>
          <span className={s.ten}>10</span>
          <span className={s.eleven}>11</span>
        </div>
        :
        <div className={s.digitalClock}>
          <span>{formatTimeString(date.getHours())}</span>
          :
          <span>{formatTimeString(date.getMinutes())}</span>
          :
          <span>{formatTimeString(date.getSeconds())}</span>
        </div>
      }
    </div>
  );
};
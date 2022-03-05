import styles from "./UncontrolledOnOff.module.css";
import {useState} from "react";

export type UncontrolledOnOffPropsType = {
  defaultIsOn?: boolean
  setIsOnValue: (isOnValue: boolean) => void
};

export const UncontrolledOnOff = (props: UncontrolledOnOffPropsType) => {
  console.log("OnOff rendering");
  const [isOn, setIsOn] = useState<boolean>(props.defaultIsOn ? props.defaultIsOn : false);
  console.log("isOn: " + isOn);

  const onStyle = {
    background: isOn ? "green" : "white",
  };
  const offStyle = {
    marginLeft: "5px",
    background: isOn ? "white" : "red",
  };
  const indicatorStyle = {
    background: isOn ? "green" : "red",
  };

  const onClickHandler = (isOnValue: boolean) => {
    setIsOn(isOnValue);
    props.setIsOnValue(isOnValue);
  };

  return (
    <div>
      <div
        onClick={() => onClickHandler(true)}
        className={styles.switch}
        style={onStyle}
      >
        On
      </div>
      <div
        onClick={() => onClickHandler(false)}
        className={styles.switch}
        style={offStyle}
      >
        Off
      </div>
      <div className={styles.indicator} style={indicatorStyle}/>
    </div>
  );
};
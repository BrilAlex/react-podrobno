import styles from "./UncontrolledOnOff.module.css";
import {useState} from "react";

export const UncontrolledOnOff = () => {
  console.log("OnOff rendering");
  const [isOn, setIsOn] = useState<boolean>(false);
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

  return (
    <div>
      <div onClick={() => setIsOn(true)} className={styles.switch} style={onStyle}>
        On
      </div>
      <div onClick={() => setIsOn(false)} className={styles.switch} style={offStyle}>
        Off
      </div>
      <div className={styles.indicator} style={indicatorStyle}/>
    </div>
  );
};
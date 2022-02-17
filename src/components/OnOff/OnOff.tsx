import styles from "./OnOff.module.css";
import {useState} from "react";

export const OnOff = () => {
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
    display: "inline-block",
    width: "10px",
    height: "10px",
    marginLeft: "5px",
    background: isOn ? "green" : "red",
    border: "1px solid black",
    borderRadius: "5px",
  };

  return (
    <div>
      <div onClick={() => setIsOn(true)} className={styles.switch} style={onStyle}>
        On
      </div>
      <div onClick={() => setIsOn(false)} className={styles.switch} style={offStyle}>
        Off
      </div>
      <div style={indicatorStyle}></div>
    </div>
  );
};
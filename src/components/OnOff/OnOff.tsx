import styles from "./OnOff.module.css";

export type OnOffPropsType = {
  isOn: boolean
  setIsOn: (isOnValue: boolean) => void
};

export const OnOff = (props: OnOffPropsType) => {
  console.log("OnOff rendering");
  console.log("isOn: " + props.isOn);

  const onStyle = {
    background: props.isOn ? "green" : "white",
  };
  const offStyle = {
    marginLeft: "5px",
    background: props.isOn ? "white" : "red",
  };
  const indicatorStyle = {
    background: props.isOn ? "green" : "red",
  };

  return (
    <div>
      <div
        onClick={() => props.setIsOn(true)}
        className={styles.switch}
        style={onStyle}
      >
        On
      </div>
      <div
        onClick={() => props.setIsOn(false)}
        className={styles.switch}
        style={offStyle}
      >
        Off
      </div>
      <div className={styles.indicator} style={indicatorStyle}/>
    </div>
  );
};
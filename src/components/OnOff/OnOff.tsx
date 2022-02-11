import styles from "./OnOff.module.css";

type OnOffPropsType = {
  isOn: boolean
}

export const OnOff = (props: OnOffPropsType) => {
  const getOnButtonClassName = () => {
    return `${styles.button} ${props.isOn && styles.onActive}`;
  };
  const getOffButtonClassName = () => {
    return `${styles.button} ${!props.isOn && styles.offActive}`;
  };
  const getIndicatorClassName = () => {
    return `${styles.indicator} ${props.isOn && styles.on}`;
  };

  return (
    <div className={styles.switcher}>
      <div className={getOnButtonClassName()}>On</div>
      <div className={getOffButtonClassName()}>Off</div>
      <div className={getIndicatorClassName()}></div>
    </div>
  );
};
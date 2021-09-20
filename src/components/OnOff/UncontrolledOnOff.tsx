import React, {useState} from "react";

type UncontrolledOnOffProps = {
    callback: (value: boolean) => void
    /*
    * Optional background color for On mode
    */
    onBackGroundColor?: string
    /*
    * Optional background color for Off mode
    */
    offBackGroundColor?: string
}

export const UncontrolledOnOff = (props: UncontrolledOnOffProps) => {
    let [isOn, setIsOn] = useState(false);

    const onStyle = {
        display: "inline-block",
        width: "30px",
        height: "20px",
        padding: "5px",
        border: "1px solid black",
        backgroundColor: isOn ? (
            props.onBackGroundColor ? props.onBackGroundColor : "green"
        ) : "white"
    }
    const offStyle = {
        display: "inline-block",
        width: "30px",
        height: "20px",
        marginLeft: "5px",
        padding: "5px",
        border: "1px solid black",
        backgroundColor: !isOn ? (
            props.offBackGroundColor ? props.offBackGroundColor : "red"
        ) : "white"
    }
    const indicatorStyle = {
        display: "inline-block",
        width: "10px",
        height: "10px",
        marginLeft: "5px",
        border: "1px solid black",
        borderRadius: "5px",
        backgroundColor: isOn ? (
            props.onBackGroundColor ? props.onBackGroundColor : "green"
        ) : (
            props.offBackGroundColor ? props.offBackGroundColor : "red"
        )
    }

    const onClickHandler = () => {
        setIsOn(true);
        props.callback(true);
    }
    const offClickHandler = () => {
        setIsOn(false);
        props.callback(false);
    }

    return (
        <div>
            <div style={onStyle} onClick={onClickHandler}>On</div>
            <div style={offStyle} onClick={offClickHandler}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
}
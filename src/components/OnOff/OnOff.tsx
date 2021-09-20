import React from "react";

type OnOffProps = {
    status: boolean
    callback: (value: boolean) => void
}

export const OnOff = (props: OnOffProps) => {
    const onStyle = {
        display: "inline-block",
        width: "30px",
        height: "20px",
        padding: "5px",
        border: "1px solid black",
        backgroundColor: props.status ? "green" : "white"
    }
    const offStyle = {
        display: "inline-block",
        width: "30px",
        height: "20px",
        marginLeft: "5px",
        padding: "5px",
        border: "1px solid black",
        backgroundColor: !props.status ? "red" : "white"
    }
    const indicatorStyle = {
        display: "inline-block",
        width: "10px",
        height: "10px",
        marginLeft: "5px",
        border: "1px solid black",
        borderRadius: "5px",
        backgroundColor: props.status ? "green" : "red"
    }

    return (
        <div>
            <div style={onStyle} onClick={() => props.callback(true)}>On</div>
            <div style={offStyle} onClick={() => props.callback(false)}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
}
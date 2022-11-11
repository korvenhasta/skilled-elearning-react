import react from "react";
import styles from "./Button.module.css";

export default function Button(props) {
    return (
        <button className="{styles.button} {styles.button_getStarted}">{props.buttonTitle}</button>
    );
}
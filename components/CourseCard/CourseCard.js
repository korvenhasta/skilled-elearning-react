import React from "react";
import styles from "./CourseCard.module.css";

export default function CourseCard(props) {
    return (
    <div className={styles.course}>
        {/* <img src={props.cardImg} alt={props.cardAlt}/> */}
        <h4>{props.cardTitle}</h4>
        <p>{props.cardContent}</p>
        <a href={props.cardLink}>{props.cardLinkName}</a>
    </div>
    );
}
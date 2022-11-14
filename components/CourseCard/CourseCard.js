import React from "react";
import styles from "./CourseCard.module.css";

export default function CourseCard(props) {
    return (
    <div className={styles.course}>
        <img className={styles.courses__icon} src={props.cardImg} alt={props.cardAlt}/>
        <h4 className={styles.courses__title}>{props.cardTitle}</h4>
        <p className={styles.courses__about}>{props.cardContent}</p>
        <a className={styles.courses__link} href={props.cardLink}>{props.cardLinkName}</a>
    </div>
    );
}
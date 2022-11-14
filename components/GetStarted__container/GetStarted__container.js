import react from "react";
import styles from "./GetStarted__container.module.css"

export default function GetStarted__container({
    children,
    ...props
}) {
    return (
        <div
            {...props}
            className={styles.container}
        >
            {children}
        </div>
    )
}
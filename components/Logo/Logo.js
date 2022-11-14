import react from "react";
import styles from "./Logo.module.css"

export default function Logo({
    children,
    ...props
}) {
    return (
        <img
            {...props}
            className={styles.logo}
        >
            {children}
        </img>
    )
}
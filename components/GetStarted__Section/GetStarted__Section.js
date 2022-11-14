import react from "react";
import styles from "./GetStarted__Section.module.css"

export default function getStarted__Section({
    children,
    ...props
}) {
    return (
        <section
            {...props}
            className={styles.getStarted__Section}
        >
            {children}
        </section>
    )
}
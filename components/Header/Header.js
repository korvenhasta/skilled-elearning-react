import react from "react";
import styles from "./Header.module.css"

export default function Header(
    children,
    ...props
) {
    return (
        <header
            {...props}
            className={styles.header}
        >
            {children}
        </header>
    )
}
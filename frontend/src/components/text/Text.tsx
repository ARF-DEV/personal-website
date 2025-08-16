import styles from "./Text.module.css"

function Paragraph({ children }: { children: string }) {
    return (<p className={styles.text}>
        {children}
    </p>)
}


export default Paragraph;
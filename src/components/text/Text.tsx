import clsx from "clsx";
import styles from "./Text.module.css"

function Paragraph({ children, disableIndent = false }: {
    children: string, disableIndent?: boolean
}) {
    return (<p className={clsx(!disableIndent && styles.text)}>
        {children}
    </p>)
}


export default Paragraph;
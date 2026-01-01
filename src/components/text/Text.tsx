import clsx from "clsx";
import styles from "./Text.module.css"

interface ParagraphProps {
    children: string
    disableIndent?: boolean
}

function Paragraph({ children, disableIndent = false }: ParagraphProps) {
    return (<p className={clsx(!disableIndent && styles.text)}>
        {children}
    </p>)
}

export default Paragraph;
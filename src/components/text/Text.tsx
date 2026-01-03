import clsx from "clsx";
import styles from "./Text.module.css"

interface ParagraphProps {
    children: string
    disableIndent?: boolean
}

function Text({ children, disableIndent = false }: ParagraphProps) {
    return (<p className={clsx(!disableIndent && styles.textIndent, styles.text )}>
        {children}
    </p>)
}

export default Text;
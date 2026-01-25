import clsx from "clsx";
import styles from "./Text.module.css"
import Markdown from "react-markdown";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {a11yDark} from 'react-syntax-highlighter/dist/esm/styles/prism'

interface ParagraphProps {
    children: string
    disableIndent?: boolean
}

function Text({ children, disableIndent = false }: ParagraphProps) {
    return (<p className={clsx(!disableIndent && styles.textIndent, styles.text )}>
        {children}
    </p>)
}
export function TextMarkdown({ children }: ParagraphProps) {
    return (
        <div className={styles.text}>
        <Markdown 
        children={children}
        components={{
            code(props) {
                const {children, className, ...rest}  = props;
                const match = className?.startsWith("language-");

                return match ? (
                    <SyntaxHighlighter
                        PreTag="div"
                        children={String(children).replace(/\n$/, '')}
                        language={className?.split("-")[1]}
                        style={a11yDark}

                    />
                ) : (
                    <code {...rest} className={className}>
                        {children}
                    </code>
                );

            }
        }}
        />

        </div>)
}

export default Text;
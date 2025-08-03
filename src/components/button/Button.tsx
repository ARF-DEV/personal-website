import styles from "./Button.module.css";

function Button({ text }: { text: string }) {
  return <div className={`${styles.button} ${styles.boldText}`}>{text}</div>;
}

export default Button;

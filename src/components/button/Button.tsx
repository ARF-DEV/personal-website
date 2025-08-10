import styles from "./Button.module.css";

type ButtonOnClickFunc = () => void;
function Button({
  text,
  onClick = () => {},
}: {
  text: string;
  onClick: ButtonOnClickFunc;
}) {
  return (
    <button className={`${styles.button} ${styles.boldText}`} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;

import styles from "./Button.module.css";

type ButtonOnClickFunc = () => void;
interface ButtonProps {
  text: string;
  onClick: ButtonOnClickFunc;
}

function Button({
  text,
  onClick = () => { },
}: ButtonProps) {
  return (
    <button className={`${styles.button} ${styles.boldText}`} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;

import styles from "./Button.module.css";

interface ButtonProps {
  text: string;
  onClick: () => void;
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

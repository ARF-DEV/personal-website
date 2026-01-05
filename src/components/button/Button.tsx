import styles from "./Button.module.css";

interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
}

function Button({
  text,
  onClick = () => { },
  className = `${styles.button} ${styles.boldText}`
}: ButtonProps) {
  // const defaultClass = `${styles.button} ${styles.boldText}`;
  // const combinedClass = defaultClass + " " + className;
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;

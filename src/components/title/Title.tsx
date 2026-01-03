import styles from "./Title.module.css";

interface TitleProps {
  title: string;
  description?: string;
  size?: string;
}

function Title({
  title,
  description = "",
  size = "2.5rem"
}: TitleProps) {
  return (
    < div style={{ fontSize: size }
    } className={styles.container} >
      <span className="title">{title}</span>
      {description && <p className={styles.desc}>{description}</p>}
    </div >
  );
}

export default Title;

import styles from "./Title.module.css";

function Title({
  title,
  description,
  size = "2.5rem"
}: {
  title: string;
  description?: string;
  size?: string;
}) {
  console.log(size)
  return (
    < div style={{ fontSize: size }
    } className={styles.container} >
      <span className={styles.title}>{title}</span>
      {description && <p className={styles.desc}>{description}</p>}
    </div >
  );
}

export default Title;

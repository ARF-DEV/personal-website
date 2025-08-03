import styles from "./Title.module.css";

function Title({ title, description }: { title: string; description: string }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.desc}>{description}</p>
    </div>
  );
}

export default Title;

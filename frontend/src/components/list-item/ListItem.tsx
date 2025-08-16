import styles from "./ListItem.module.css";

function ListItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className={styles.listItem}>
      <p className={styles.title}>{title}</p>
      <p className={styles.desc}>{description}</p>
    </div>
  );
}

export default ListItem;

import { useNavigate } from "react-router";
import styles from "./ListItem.module.css";

function ListItem({
  id,
  title,
  description,
}: {
  id: string;
  title: string;
  description: string;
}) {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate(`/blogs/${id}`)
  };
  return (
    <div className={styles.listItem} onClick={handleOnClick}>
      <p className={styles.title}>{title}</p>
      <p className={styles.desc}>{description}</p>
    </div>
  );
}

export default ListItem;

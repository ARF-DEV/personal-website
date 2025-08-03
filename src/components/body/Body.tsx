import styles from "./Body.module.css";
import ListItem from "../list-item/ListItem";
import Title from "../title/Title";

function Body() {
  return (
    <div className={styles.body}>
      <Title title="caffeine_addict's" description="for blog and stuff.." />
      <ListItem title="Project 1" description="apaa hayooo" />
      <ListItem title="Project 1" description="apaa hayooo" />
      <ListItem title="Project 1" description="apaa hayooo" />
      <ListItem title="Project 1" description="apaa hayooo" />
      <ListItem title="Project 1" description="apaa hayooo" />
    </div>
  );
}

export default Body;

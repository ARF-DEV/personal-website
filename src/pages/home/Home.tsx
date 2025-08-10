import styles from "./Home.module.css";
import Title from "../../components/title/Title";
import ListItem from "../../components/list-item/ListItem";
import Header from "../../components/header/Header";
function Home() {
  return (
    <>
      <Header />
      <div className={styles.body}>
        <Title title="caffeine_addict's" description="for blog and stuff.." />
        <ListItem title="Project 1" description="apaa hayooo" />
        <ListItem title="Project 1" description="apaa hayooo" />
        <ListItem title="Project 1" description="apaa hayooo" />
        <ListItem title="Project 1" description="apaa hayooo" />
        <ListItem title="Project 1" description="apaa hayooo" />
      </div>
    </>
  );
}

export default Home;

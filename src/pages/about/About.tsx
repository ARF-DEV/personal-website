import styles from "./About.module.css";
import Title from "../../components/title/Title";
// import ListItem from "../../components/list-item/ListItem";
import Header from "../../components/header/Header";
function Home() {
  return (
    <>
      <Header />
      <div className={styles.body}>
        <Title title="caffeine_addict's" description="this is okayy" />
      </div>
    </>
  );
}

export default Home;

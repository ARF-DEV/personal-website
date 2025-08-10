import styles from "./About.module.css";
import Title from "../../components/title/Title";
// import ListItem from "../../components/list-item/ListItem";
import Header from "../../components/header/Header";
import Logo from "../../components/logo/Logo"
import ProfileImage from "../../assets/profile.jpeg"
import RedisImage from "../../assets/redis.svg"
import GolangImage from "../../assets/golang.png"
import PythonImage from "../../assets/python.png"
import PostgresImage from "../../assets/postgres.png"
import RabbitMQImage from "../../assets/rabbitmq.png"
import JsImage from "../../assets/js.png"
import TsImage from "../../assets/ts.png"
import ReactImage from "../../assets/react.png"
// import PythonImage from "../../assets/python.png"
import LoremIpsum from "react-lorem-ipsum";
import Paragraph from "../../components/text/Text";

function Home() {
  return (
    <>
      <Header />
      <div className={styles.body}>
        <Title title="caffeine_addict's" description="work in progress lol" />
        <div className={styles.container}>
          <div className="left">
            <Logo logo={ProfileImage} size={300} alt="profile" />
            <Title title="Tech stacks" />
            <div className={styles.grid}>
              <Logo logo={GolangImage} size={50} alt="profile" />
              <Logo logo={PythonImage} size={50} alt="profile" />
              <Logo logo={RedisImage} size={50} alt="profile" />
              <Logo logo={PostgresImage} size={50} alt="profile" />
              <Logo logo={RabbitMQImage} size={50} alt="profile" />
              <Logo logo={JsImage} size={50} alt="profile" />
              <Logo logo={TsImage} size={50} alt="profile" />
              <Logo logo={ReactImage} size={50} alt="profile" />
            </div>
          </div>
          <div className="right">
            <Paragraph>
              I am a back-end developer with a passion to learn new things. I've
              worked on different types of project ranging from AI to Games and
              Back-end APIs. Due to my experience from past projects that uses a
              low-level programming language such as C++ and other projects that
              require a complex algorithm such as games, I am more aware of the app
              performance in terms of speed and memory usage and able to try to
              optimize it. In addition to my technical skills and experience.
            </Paragraph>
            <Paragraph>
              I am also eager to learn new technologies and trends from different
              computer science field such as Deep Learning, Game Development,
              Graphics Programming and Web Development, I am committed to stay at
              forefront of the industry and applying my knowledge in a new and
              exciting ways.
            </Paragraph>
            <LoremIpsum p={3} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

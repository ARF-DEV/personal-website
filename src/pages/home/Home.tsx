import styles from "./Home.module.css";
import Title from "../../components/title/Title";
import ListItem from "../../components/list-item/ListItem";
import Header from "../../components/header/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";

type Blog = {
  id: number
  title: string
  created_at: string
  updated_at: string
}
function Home() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await axios.get(`${import.meta.env.VITE_API_HOST}/public/v1/blogs`);
      setBlogs(response.data.data);
    }
    fetchBlogs();

  }, []);
  return (
    <>
      <Header />
      <div className={styles.body}>
        <Title title="caffeine_addict's" description="for blog and stuff.." />
        {blogs.map((blog) => {
          return <ListItem key={blog.id} title={blog.title} description={dayjs(blog.created_at).locale('id').format("MMM D, YYYY · H:mm")} />
        })}
      </div>
    </>
  );
}

export default Home;

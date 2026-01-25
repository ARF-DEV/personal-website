import Title from "../../components/title/Title";
import ListItem from "./ListItem";
import { useEffect, useState } from "react";
import axios from "axios";
import type { Blog } from "../../types/blog";
import { formatDate } from "../../utils/date";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router";
import styles from "./Home.module.css";

function Home() {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  useEffect(() => {
    const fetchBlogs = async () => {
      console.log(import.meta.env.VITE_API_HOST);
      const response = await axios.get(
        `${import.meta.env.VITE_API_HOST}/public/v1/blogs`,
      );
      setBlogs(response.data.data);
    };
    fetchBlogs();
  }, []);
  return (
    <>
      <div className={styles.topContainer}>
        <Title title="caffeine_addict's" description="for blog and stuff.." />
        <Button
          text="Create"
          onClick={() => navigate("/blogs")}
          className={styles.createButton}
        />
      </div>
      <div>
        {blogs.map((blog) => {
          return (
            <ListItem
              key={blog.slug}
              id={blog.slug}
              title={blog.title}
              description={formatDate(blog.created_at)}
            />
          );
        })}
      </div>
    </>
  );
}

export default Home;

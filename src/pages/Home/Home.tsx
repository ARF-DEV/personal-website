import Title from "../../components/title/Title";
import ListItem from "./ListItem";
import { useEffect, useState } from "react";
import axios from "axios";
import type { Blog } from "../../types/blog";
import { formatDate } from "../../utils/date";


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
    <div>
      <Title title="caffeine_addict's" description="for blog and stuff.." />
      {
        blogs.map((blog) => {
          return <ListItem key={blog.slug} id={blog.slug} title={blog.title} description={formatDate(blog.created_at)} />
        })
      }
    </div>
  );
}

export default Home;

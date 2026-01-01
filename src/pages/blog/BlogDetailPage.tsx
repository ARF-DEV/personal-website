import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router"
import type { BlogDetail } from "../../types/blog";
import Title from "../../components/title/Title";
export function BlogDetail(
) {
    const [blog, setBlog] = useState<BlogDetail | null>(null);
    const param = useParams();
    useEffect(() => {
        const fetchBlogDetail = async () => {
            const response = await axios.get(`${import.meta.env.VITE_API_HOST}/public/v1/blogs/${param.id}`);
            console.log(response.data);
            setBlog(response.data.data);
        }
        fetchBlogDetail();
    }, [param.id])

    if (!blog) return null

    return (
        <div className="container">
            <Title title={blog.title} />
            Apa dahh {blog?.slug} {blog?.title}
        </div>
    )
}
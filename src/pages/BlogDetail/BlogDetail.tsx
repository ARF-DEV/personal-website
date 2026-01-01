import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router"
import type { BlogDetail } from "../../types/blog";
import Title from "../../components/title/Title";
import Header from "../../components/header/Header";
import { formatDate } from "../../utils/date";
import Paragraph from "../../components/text/Text";

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
            <Header></Header>
            <Title title={blog.title} description={`Last updated: ${formatDate(blog.updated_at)}`} />
            <Paragraph disableIndent>
                {blog.content}
            </Paragraph>
        </div>
    )
}
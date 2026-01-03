import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router"
import Title from "../../components/title/Title";
import Button from "../../components/button/Button";
import { formatDate } from "../../utils/date";
import Text from "../../components/text/Text";
import type { Blog } from "../../types/blog";
import styles from "./BlogDetail.module.css"

export function BlogDetail() {
    const navigate = useNavigate()
    const param = useParams();
    const [blog, setBlog] = useState<Blog | null>();

    useEffect(() => {
        const fetchBlogDetail = async () => {
            const response = await axios.get(`${import.meta.env.VITE_API_HOST}/public/v1/blogs/${param.id}`);
            setBlog(response.data.data);
        }
        fetchBlogDetail();
    }, [param.id])

    if (!blog) return null;

    return (
        <>
            <div className="content-container">
                <Title title={blog.title} description={`Last updated: ${formatDate(blog.updated_at)}`} />
                <Text disableIndent>
                    {blog.content}
                </Text>
            <div className={styles.buttonContainer}>
                <Button
                    text="Edit"
                    onClick={() => {navigate(`/blogs/${param.id}/edit`)}}
                />
            </div>
            <div className={styles.footer}></div>
            </div>
        </>
    )

}

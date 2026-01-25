import { useEffect, useRef, useState } from "react";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import axios from "axios";
import type { BlogData } from "../../types/blog";
import styles from "./CreateBlog.module.css"
import Title from "../../components/title/Title";
import { TextMarkdown } from "../../components/text/Text";
import { useNavigate } from "react-router";

export function CreateBlog() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [blog, setBlog] = useState<BlogData>({
        content: "",
        title: "",
    });
    const [isEdit, setIsEdit] = useState<boolean>(true);
    const navigate = useNavigate();

    const updateTitle = (newTitle: string) => {
        setBlog(
            {
                ...blog,
                title: newTitle
            }
        )
    }
    const updateContent = (newContent: string) => {
        setBlog(
            {
                ...blog,
                content: newContent
            }
        )
    }
    const submitBlog = () => {
        const postBlogs = async () => {
            if (blog.title === "")  {
                alert("title is required")
                return
            }
            const response = await axios.post(`${import.meta.env.VITE_API_HOST}/public/v1/blogs`, blog)
            console.log(response);
        }
        postBlogs();
        navigate("/");
    };

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [blog]);

    return (
        <div ref={containerRef} className="content-container">
            <div className={styles.buttonContainer}>
                <Button
                    text={isEdit ? "View" : "Edit"}
                    onClick={() => {setIsEdit((prev) => {return !prev})}}
                    className={styles.editButton}
                />
            </div>
            {isEdit ? (
                <>
                    <Input 
                    initialValue={blog.title} 
                    updateFunc={updateTitle} 
                    placeHolder="Your title"
                    />
                    <Input 
                    initialValue={blog.content} 
                    updateFunc={updateContent}
                    variant="multi-line"
                    placeHolder="Write your content here"
                    />
                </>
            ) : (
                <>
                   <Title title={blog.title}/>
                    <TextMarkdown>
                        {blog.content}
                    </TextMarkdown>
                </>
            )}
            <div className={styles.buttonContainer}>
                <Button
                    text="Submit"
                    onClick={submitBlog}
                    className={styles.submitButton}
                />
            </div>
            <div className="footer"></div>
        </div>

    )
}

import { useEffect, useRef, useState } from "react";
import Button from "../../components/button/Button";
import "./CreateBlog.css"
import Input from "../../components/input/Input";
import axios from "axios";
import type { BlogData } from "../../types/blog";

export function CreateBlog() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [blog, setBlog] = useState<BlogData>({
        content: "",
        title: "",
    })
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
    };

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [blog]);

    return (
        <div ref={containerRef} className="content-container">
            <Input initialValue={blog.title} updateFunc={updateTitle} placeHolder="Your title"/>
            <Input initialValue={blog.content} updateFunc={updateContent} variant="multi-line" placeHolder="Write your content here"/>
            <div className="button-container">
                <Button
                    text="Submit"
                    onClick={submitBlog}
                />
            </div>
            <div className="footer"></div>
        </div>

    )
}

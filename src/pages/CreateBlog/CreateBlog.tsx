import { useEffect, useRef, useState } from "react";
import Header from "../../components/header/Header";
import Button from "../../components/button/Button";
import "./CreateBlog.css"
import { Input } from "./Input";
import axios from "axios";

export function CreateBlog() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const submitBlog = () => {
        const postBlogs = async () => {
            const response = await axios.post(`${import.meta.env.VITE_API_HOST}/public/v1/blogs`, {
                title: title,
                content: content
            })
            console.log(response);
        }
        postBlogs();
    };
    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [title, content])

    return (
        <div ref={containerRef} className="container">
            <Header />
            <Input textSize={30} value={title} setValue={setTitle} />
            <Input textSize={20} value={content} setValue={setContent} minHeight="200px" />
            <Button
                text="Submit"
                onClick={submitBlog}
            />
        </div>

    )
}

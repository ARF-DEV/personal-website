import axios from "axios";
import React, { useEffect, useRef, useState, type JSX } from "react";
import { useParams } from "react-router"
import type { Blog, BlogData } from "../../types/blog";
import Title from "../../components/title/Title";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { formatDate } from "../../utils/date";
import Paragraph from "../../components/text/Text";

enum Mode {
    View,
    Edit
}

export function BlogDetail() {
    const param = useParams();
    const [blog, setBlog] = useState<Blog | null>();
    const [mode, setMode] = useState<Mode>(Mode.View);

    useEffect(() => {
        const fetchBlogDetail = async () => {
            const response = await axios.get(`${import.meta.env.VITE_API_HOST}/public/v1/blogs/${param.id}`);
            setBlog(response.data.data);
        }
        fetchBlogDetail();
    }, [mode, param.id])

    if (!blog) return null;

    const renderState: Record<Mode, JSX.Element> = {
        [Mode.View]: (<ViewDetail blog={blog} setMode={setMode} />),
        [Mode.Edit]: (<EditBlog currentBlog={blog} setMode={setMode} />)
    };

    return renderState[mode];
}

function ViewDetail({ blog, setMode }: { blog: Blog, setMode: React.Dispatch<Mode> }) {
    return (
        <>
            <div className="content-container">
                <Title title={blog.title} description={`Last updated: ${formatDate(blog.updated_at)}`} />
                <Button
                    text="Edit"
                    onClick={() => setMode(Mode.Edit)}
                />
                <Paragraph disableIndent>
                    {blog.content}
                </Paragraph>
            </div>
        </>
    )
}

function EditBlog({ currentBlog, setMode }: { currentBlog: Blog, setMode: React.Dispatch<Mode> }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [editedBlog, setEditedBlog] = useState<BlogData>({
        title: currentBlog.title,
        content: currentBlog.content,
    });

    const saveBlog= () => {
        const hitPutBlogs = async () => {
            const response = await axios.put(`${import.meta.env.VITE_API_HOST}/public/v1/blogs/${currentBlog.slug}`, editedBlog);
            if (response.status === 200)  {
                setMode(Mode.View);
            }
        }
        hitPutBlogs();
    };

    const setTitle = (newTitle: string) => {
        setEditedBlog((prev) => ({...prev, title: newTitle}))
    }
    const setContent = (newContent: string) => {
        setEditedBlog((prev) => ({...prev, content: newContent}))
    }

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [editedBlog]);

    return (
        <div ref={containerRef} >
            <Input 
            initialValue={editedBlog.title} 
            updateFunc={setTitle} 
            />
            <Input 
            initialValue={editedBlog.content} 
            updateFunc={setContent}
            />
            <Button
                text="Done"
                onClick={saveBlog}
            />
        </div>
    );
}
import { useEffect, useRef, useState } from "react";
import type { BlogData} from "../../types/blog";
import axios from "axios";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { useParams } from "react-router";
import styles from "./EditBlog.module.css"

function EditBlog() {
    const params = useParams();
    const containerRef = useRef<HTMLDivElement>(null);
    const [editedBlog, setEditedBlog] = useState<BlogData>({
        title: "",
        content: "",
    });

    const saveBlog= () => {
        const hitPutBlogs = async () => {
            const response = await axios.put(`${import.meta.env.VITE_API_HOST}/public/v1/blogs/${params.id}`, editedBlog);
            if (response.status !== 200)  {
                alert("failed");
            }
        }
        hitPutBlogs();
    };

    useEffect(() => {
        const fetchBlogDetail = async () => {
            const response = await axios.get(`${import.meta.env.VITE_API_HOST}/public/v1/blogs/${params.id}`);
            setEditedBlog(response.data.data);
        }
        fetchBlogDetail();
    }, [params.id]);


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
        <div ref={containerRef} className="content-container" >
            <Input 
            initialValue={editedBlog.title} 
            updateFunc={setTitle} 
            />
            <Input 
            initialValue={editedBlog.content} 
            updateFunc={setContent}
            variant="multi-line"
            />
            <div className={styles.buttonContainer}>
                <Button
                    text="Done"
                    onClick={saveBlog}
                    className={styles.doneButton}
                />
            </div>
            <div className={styles.footer}></div>
        </div>
    );
}

export default EditBlog;
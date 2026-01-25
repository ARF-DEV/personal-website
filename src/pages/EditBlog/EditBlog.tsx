import { useEffect, useRef, useState } from "react";
import type { BlogData} from "../../types/blog";
import axios from "axios";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { useNavigate, useParams } from "react-router";
import Title from "../../components/title/Title";
import { TextMarkdown } from "../../components/text/Text";
import styles from "./EditBlog.module.css"

function EditBlog() {
    const params = useParams();
    const containerRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();
    const [editedBlog, setEditedBlog] = useState<BlogData>({
        title: "",
        content: "",
    });
    const [isEdit, setIsEdit] = useState<boolean>(true);

    const saveBlog = () => {
        const hitPutBlogs = async () => {
            const response = await axios.put(`${import.meta.env.VITE_API_HOST}/public/v1/blogs/${params.id}`, editedBlog);
            if (response.status !== 200)  {
                alert("failed");
            }
        }
        hitPutBlogs();
        navigate(`/blogs/${params.id}`)
    };
    const setTitle = (newTitle: string) => {
        setEditedBlog((prev) => ({...prev, title: newTitle}))
    }
    const setContent = (newContent: string) => {
        setEditedBlog((prev) => ({...prev, content: newContent}))
    }

    useEffect(() => {
        const fetchBlogDetail = async () => {
            const response = await axios.get(`${import.meta.env.VITE_API_HOST}/public/v1/blogs/${params.id}`);
            setEditedBlog(response.data.data);
        }
        fetchBlogDetail();
    }, [params.id]);
    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [editedBlog]);


    return (
        <div ref={containerRef} className="content-container" >
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
                    initialValue={editedBlog.title} 
                    updateFunc={setTitle} 
                    />
                    <Input 
                    initialValue={editedBlog.content} 
                    updateFunc={setContent}
                    variant="multi-line"
                    />
                </>
            ) : (
                <>
                   <Title title={editedBlog.title}/>
                    <TextMarkdown>
                        {editedBlog.content}
                    </TextMarkdown>
                </>
            )}
            
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
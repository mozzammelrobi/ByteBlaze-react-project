import { useEffect, useState } from "react";
import { deleteBlog, getBlogs } from "../utils";
import BlogCard from "../compnents/BlogCard";


const Bookmarks = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        const storedBlogs = getBlogs()
        setBlogs(storedBlogs)
    }, [])

    const handleDelete = (id) => {
        deleteBlog(id)
        const storedBlogs = getBlogs()
        setBlogs(storedBlogs)
    }

    // if Bookmarks is empty the show this
    if(blogs<1) return <h1>kicho nai vai</h1>

    return (
        <div className="grid justify-center grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {
                blogs.map((blog) =>
                    <BlogCard
                    handleDelete={handleDelete}
                    deletable={true} key={blog.id} blog={blog}></BlogCard>)
            }

        </div>
    );
};

export default Bookmarks;
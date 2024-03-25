import toast from "react-hot-toast";

export const getBlogs = () => {
    let blogs = [];
    let stroredBlogs = localStorage.getItem('blogs')
    if(stroredBlogs){
        blogs = JSON.parse(stroredBlogs)
    }
    return blogs;
}

//  save blogs
export const saveBlog =(blog) => {
    let blogs = getBlogs();
    const isExist = blogs.find(b => b.id === blog.id)

    if(isExist){
        return toast.error('Alredy Bookmarked')
    }
    
    blogs.push(blog)
    localStorage.setItem('blogs', JSON.stringify(blogs))
    toast.success('Blog Bookmarked Successfully!')
}

//  deleet blog
export const deleteBlog = (id) => {
    let blogs = getBlogs();
    const remaining = blogs.filter((b) => b.id !== id )
    localStorage.setItem('blogs', JSON.stringify(remaining))
    toast.success('Blog Removed From Bookmarked')
}
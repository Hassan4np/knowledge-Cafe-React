import { useEffect, useState } from "react";
import Blogs from "../Blogs/Blogs";
import PropTypes from 'prop-types';

const Blog = ({HendleAddblogsItem,Hendleredmark}) => {
const [blogs,setblogs]=useState([]);
useEffect(()=>{
    fetch('Blogs.json')
    .then(res=>res.json())
    .then(data=>setblogs(data))
},[])

    return (
        <div className="w-2/3">
            <h3>Blog: {blogs.length} </h3>
            {
                blogs.map((blogs,idx)=><Blogs key={idx} blog={blogs} HendleAddblogsItem={HendleAddblogsItem} Hendleredmark={Hendleredmark}></Blogs>)
            }
        </div>
    );
};
Blog.propTypes = {
    HendleAddblogsItem:PropTypes.func,
    Hendleredmark:PropTypes.func

  }
export default Blog;
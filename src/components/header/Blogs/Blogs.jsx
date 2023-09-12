
import { FaBeer } from 'react-icons/fa';
import PropTypes from 'prop-types';
const Blogs = ({blog,HendleAddblogsItem,Hendleredmark}) => {
    const {author,author_img,cover,hashtags,posted_date,reading_time,title}=blog
    return (
        <div className='space-y-5 pt-5 p-5'>
            <img className="w-full" src={cover} alt="" />
            <div className="flex justify-between px-5">
                <div className='flex mt-5'>
                    <img className="w-14 " src={author_img} alt="" />
                    <div className='ml-5'>
                        <h3 className='text-6 font-bold text-black'>{author}</h3>
                        <h3>{posted_date}</h3>
                    </div>
                </div>
                <div className="flex mt-5">
                    <h6 className="mt-4 ">{reading_time} min read</h6>
                    <button className="ml-4" onClick={()=>HendleAddblogsItem(blog)}><FaBeer></FaBeer></button>
                </div>
            </div>
            <h3>{title}</h3>
          {
            hashtags.map((tag,idx)=><span  key={idx} className='mr-2 text-gray-500'>#{tag}</span>)
          }
            <button className='border-b-2 border-black text-red-400 block' onClick={()=>Hendleredmark(blog.reading_time,blog.id)}><span>mark as read</span></button>

        </div>
    );
};
Blogs.propTypes = {
    HendleAddblogsItem:PropTypes.func.isRequired,
    Hendleredmark:PropTypes.func.isRequired,
    blog:PropTypes.array

  }
export default Blogs;
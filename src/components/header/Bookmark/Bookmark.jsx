import Booksparks from "../Booksmarks/Booksparks";
import PropTypes from 'prop-types';

const Bookmark = ({blogs,Readmark}) => {
    return (
        <div className="w-1/3 p-5 mt-5 bg-slate-600 gap-5">
            <h3> Reading Time:{Readmark} </h3>
            <h3>Bookmarks: {blogs.length} </h3>
            <div className="text-xl font-bold  text-gray-400 space-y-2">
                {
                    // blogs.map((blog,idx)=><h3 key={idx}>{blog.title}</h3>)
                    blogs.map((blog,idx)=><Booksparks key={idx} blog={blog}></Booksparks>)
                }
            </div>
        </div>
    );
};
Bookmark.propTypes={
    blogs: PropTypes.array.isRequired,
    Readmark: PropTypes.number
}
export default Bookmark;
import PropTypes from 'prop-types';
const Booksparks = ({blog}) => {
    console.log(blog)
    return (
        <div className="  space-y-5 ">
            <h1>name:{blog.title}</h1>
        </div>
    );
};
Booksparks.propTypes={
    blog:PropTypes.array.isRequired
}
export default Booksparks;
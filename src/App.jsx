
import { useState } from 'react'
import './App.css'
import Blog from './components/header/Blog/Blog'
import Bookmark from './components/header/Bookmark/Bookmark'
import Header from './components/header/Header'

function App() {
  const [blogs,setblogs] = useState([]);

  const HendleAddblogsItem=(blog)=>{
    const newarray = [...blogs,blog]
    setblogs(newarray)
  }

  const [Readmark,setReadmark] = useState(0);

  const Hendleredmark=(read,id)=>{
    setReadmark(Readmark+read);
    const newarrayblogs =blogs.filter(blog=>blog.id!==id);
    setblogs(newarrayblogs)
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto p-5'>
        <Blog HendleAddblogsItem={HendleAddblogsItem}
        Hendleredmark={Hendleredmark}
        ></Blog>
        <Bookmark blogs={blogs} Readmark={Readmark}></Bookmark>
      </div>
    </>
  )
}

export default App

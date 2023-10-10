import React from 'react';
import  ReactDOM  from 'react-dom';
import useFetch from './useFetch';
import BlogList from './BlogList';
const Home = () => {
   const {data:blogs,isPending,error} = useFetch('http://localhost:3000/blogs')
  
    return (
      <div className="home">
        {error && <div>{error}</div> }
        {isPending && <div>Loading...</div>}
        {blogs && <BlogList blogs={ blogs } title ="All blogs !"/*handleDelete = {handleDelete}*/ />}
        {/* <p>{ name }</p> */}
        {/* <button onClick={()=>setName('luigi')}>change name</button> */}
        {/* <BlogList blogs={ blogs.filter((blog) => blog.author === 'Mario') } title ="Mario's blogs !" /> */}
      </div>
    );
      /* //outputting lists
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
      );*/
}
 
export default Home;
  // const handleDelete = (id) =>{
    //     const newBlogs = blogs.filter((blog) => blog.id !== id);
    //     setBlogs(newBlogs);
    // }
  //  const [name,setName] = useState('Mario');
    
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const BlogContext = React.createContext();

export const BlogConsumer = BlogContext.Consumer;

const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([])

  // useEffect( () => {
  //   axios.get('/api/blogs')
  //     .then( res => {
  //       setBlogs(res.data)
  //     })
  //     .catch( err => console.log(err))
  // }, [])
  const getAllBlogs = (parentId) => {
    axios.get(`/api/parent/${parentId}/blogs`)
      .then( res => {
        setBlogs(res.data)
      })
      .catch( err => console.log(err))
  }

  const addBlog = (blog) => {
    axios.post('/api/blogs', { blog })
      .then( res => {
        setBlogs([...blogs, res.data])
      })
      .catch( err => console.log(err))
  }

  const updateBlog = (id, blog) => {
    axios.put(`/api/blogs/${id}`, { blog })
      .then( res => {
        const newUpdatedBlogs = blogs.map( b => {
          if (b.id === id) {
            return res.data
          }
          return b 
        })
        setBlogs(newUpdatedBlogs)
      })
      .catch( err => console.log(err))
  }

  const deleteBlog = (id) => {
    axios.delete(`/api/blogs/${id}`)
      .then( res => setBlogs( blogs.filter( b => b.id !== id )))
      .catch( err => console.log(err))
  }

  return (
    <BlogContext.Provider value={{
      blogs,
      addBlog: addBlog,
      updateBlog: updateBlog,
      deleteBlog: deleteBlog,
      getAllBlogs: getAllBlogs,
    }}>
      { children }
    </BlogContext.Provider>
  )
}

export default BlogProvider;
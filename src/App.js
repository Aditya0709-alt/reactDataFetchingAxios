import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
const App = () => {
  const [posts, setPosts] = useState([])
  const [users, setUsers] = useState([])

  const getPosts = async () => {
    try {
      const userPosts = await axios.get("https://jsonplaceholder.typicode.com/posts")

      setPosts(userPosts.data)

    } catch (err) {
      console.error(err.message)
    }
  }

  const getUsers = async () => {
    try {
      const userData = await axios.get('https://jsonplaceholder.typicode.com/users')
      setUsers(userData.data)
    } catch (err) {
      console.err(err)
    }
  }




  useEffect(() => {

    getPosts()
    getUsers()
  }, [])

  return (
    <div className='App'>
      <h1>JSON Posts</h1>
      <ul>
        {posts.map(post => (
          <div className='post-json'>
            <h3 className='post-heading'>{post.id} $ {post.title}</h3>
            <br />
            <p className='post-body'>{post.body}</p>
          </div>
        ))}
      </ul>
    </div >
  );
}  

export default App;
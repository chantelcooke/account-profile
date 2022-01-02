import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Set up the initial Context
// naming is the modelName Context
export const UserContext = React.createContext(); 

// create a exportable consumer to use in other components 
// of stuff we need in the provider 
// name is the same convention 
export const UserConsumer = UserContext.Consumer;

// provider is a component that is storing global stuff
const UserProvider = ({ children }) => {
  // state and functions you want global
  // HOC stuff here 
  const [user, setUser] = useState({ username: '', created_at: '', memberlvl: ''})

  useEffect( () => {
    axios.get('/api/users/1')
      .then( res => setUser(res.data) )
      .catch( err => console.log(err))
  }, [])

  const updateUser = (id, user) => {
    axios.put(`/api/users/${id}`, { user })
    // is only for one user
      .then( res => setUser(res.data))
      .catch( err => console.log(err))
  }

  return (
    <UserContext.Provider value={{
      ...user,
      updateUser: updateUser,
    }}>
      { children }
    </UserContext.Provider>
  )
} 

export default UserProvider;
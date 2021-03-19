import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { setUsers } from './actions';
import { makeSelectUsers } from './selectors';

const stateSelector = createSelector(makeSelectUsers, (users) => ({
    users
}))
const actionDispatch = (dispatch) => ({
    setUser: (users) => dispatch(setUsers(users))
})

function Home(props) {
const { users } = useSelector(stateSelector);
const { setUser } = actionDispatch(useDispatch());

console.log("users:", users)

const fetchUsers = async () => {
   try{
    const response = await fetch("https://reqres.in/api/users") 
    const parseRes = await response.json()
    setUser(parseRes.data)
}
   catch (error) {
    console.error(error.message)
   }
}

useEffect(() => {
    fetchUsers()
}, []);

    return (
        <div>
           <h2>Hello World</h2> 
        </div>
    )
}

export default Home;

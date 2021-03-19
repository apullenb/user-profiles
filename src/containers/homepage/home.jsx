import React from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { makeSelectUsers } from './selectors';

const stateSelector = createSelector(makeSelectUsers, (users) => ({
    users
}))

function Home(props) {
const { users } = useSelector(stateSelector);

console.log("users:", users)

    return (
        <div>
           <h2>Hello World</h2> 
        </div>
    )
}

export default Home;

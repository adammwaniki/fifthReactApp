//here we  can play around with the boolean  and the username to see what will be returned based on whether the boolean is true or false or whether the username is empty or not od if the key value pair for username is not present

import React from 'react'

import UserGreeting from './UserGreeting'

function App() {
    return(
        <>
            <UserGreeting isLoggedIn ={true} username= "Adam"/>
        </>
    );

}

export default App


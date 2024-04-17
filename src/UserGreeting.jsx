//we can use an if else statement like so
/*
function UserGreeting(props){
    if(props.isLoggedIn){
        return <h2>Welcome {props.username}</h2>
    }
    else{
        return <h2>Please log in to continue</h2>
    }

}
export default UserGreeting
*/


//or we can use a ternary expression like so
/*
function UserGreeting(props){

    return props.isLoggedIn ? <h2 className="welcome-message">Welcome {props.username}</h2> : <h2 className="login-prompt">Please log in to continue</h2>

}
export default UserGreeting
*/


//or like so for ease of reading
//always remember to include proptypes if your working with props so that you can easily debug
//its also good practice to include default props

import PropTypes from "prop-types"

function UserGreeting(props){
    const welcomeMessage = <h2 className="welcome-message">Welcome {props.username}</h2>
    const loginPrompt = <h2 className="login-prompt">Please log in to continue</h2>

    return props.isLoggedIn ? welcomeMessage : loginPrompt

}
UserGreeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}

export default UserGreeting
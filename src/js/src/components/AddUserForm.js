import React, {useState} from 'react';
import {userList} from "../data";

export function AddUserForm(props) {

    const initUser = {id: null, name: '', username: ''};

    const [user, setUser] = useState(initUser);
    const [users, setUsers] = useState(userList);

    function handleChange(e) {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
    }

    // function addUser(user) {
    //     user.id = users.length + 1;
    //     setUsers([...users, user]);
    // }

    function handleSubmit(e) {
        e.preventDefault();
        props.addUser(user);
            console.log("OUTSIDE" + props.addUser(user));
        // if (user.name && user.username) {
          //  console.log("******IN" + props.addUser(user));
        // }

    }

    return (
        <form>
            <label>Name</label>
            <input className="u-full-width" type="text" name="name" defaultValue="hi"/>
            <label>Username</label>
            <input className="u-full-width" type="text" name="username" defaultValue="df"/>
            {/*<input className="u-full-width" type="text" name="username" value={user.username}/>*/}
            <button className="button-primary" type="submit" onClick={handleSubmit}>Add user</button>
        </form>
    )
}

import React, { useState, useEffect } from 'react';
import { getAllUsers } from './client';
import { UserTable } from "./UserTable";

export function DisplayUsers(props) {

    // const [users, setUsers] = useState(userList);
    const [userState, setUserState] = useState({users: []});
    //const [data, setData] = React.useState(name);

    useEffect(() => {
        fetchUsers();
    }, []);

    function fetchUsers() {
        getAllUsers() //fetch('http://localhost:8080...)
            .then(res => res.json())
            .then(users => {
                setUserState({
                    users: users
                }, () => {
                    console.log("users: " + users);
                })
            })
    }

    function handleChange(e) {
        //e.preventDefault();
        //const {name, value} = e.target;
        const value = e.target
        //setUserState({...users, [name]: value});
        //setUserState(...users, e.target);
        setUserState(value);
    }

     function handleSubmit(e) {
         e.preventDefault();
    //     // if (user.name && user.age) props.addUser(user);
    //     setData({...data});
     }

    return (
        <div>
            <UserTable {...userState}/>
            {/*<AddUserForm {...addUser}/>*/}

            {/*<form>*/}
            {/*    <label>Name</label>*/}
                {/*<input className="u-full-width" type="text" value={e.target.value} name="name" onChange={handleChange} />*/}
                {/*<button className="button-primary" type="submit" onClick={handleSubmit} >Add user</button>*/}
            {/*</form>*/}

            {/*{userState.users.map((user, index) =>*/}
            {/*    <div key={index}>*/}
            {/*        {user.name}*/}
            {/*        {user.age}*/}
            {/*    </div>*/}
            {/*)}*/}
        </div>
    );
}


import React, { useState, useEffect } from 'react';
import { getAllUsers } from './client';
import { UserTable } from "./UserTable";

export function DisplayUsers() {

    // const [users, setUsers] = useState(userList);
    const [userState, setUserState] = useState({users: []});

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

    return (
        <div>
            {/*<UserTable userState={userState}/>*/}
            <UserTable {...userState}/>
            {userState.users.map((user, index) =>
            <div key={index}>
                {user.name}
                {user.age}
            </div>
            )}
        </div>
    );
}


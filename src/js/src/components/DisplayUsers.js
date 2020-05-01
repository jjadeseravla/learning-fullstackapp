import React, { useState, useEffect } from 'react';
import { getAllUsers } from './client';

export function DisplayUsers() {

    const [state, setState] = useState({users: []});

    useEffect(() => {
        fetchUsers();
    }, []);

    function fetchUsers() {
        getAllUsers() //fetch('http://localhost:8080...)
            .then(res => res.json())
                .then(users => {
                    setState({
                        users: users
                    }, () => {
                    console.log("users: " + users);
                    })
                })
    }

    return (
        <div>
            {state.users.map((user, index) =>
            <div key={index}>
                {user.name}
                {user.age}
            </div>
            )}
        </div>
    );
}


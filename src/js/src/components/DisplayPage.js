import React, {useEffect, useState} from 'react'
import UserTable from './tables/UserTable';
import AddUserForm from './forms/AddUserForm';
import EditUserForm from './forms/EditUserForm';
import {getAllUsers} from "../client";

//PARENT
const DisplayPage = () => {

    //const [users, setUsers] = useState(props);

    const [usersState, setUsersState] = useState({users: []});

    useEffect(() => {
        fetchUsers();
    }, []);

    function fetchUsers() {
        getAllUsers() //fetch('http://localhost:8080...)
            .then(res => res.json())
            .then(users => {
                //console.log("*****" + users)
                setUsersState({
                    users: users
                    //}, () => {
                    //console.log("users: " + users);
                })

            })
    }


    const addUser = user => {
        // user.id = users.length + 1;
        // setUsers([...users, user]);
    }

    const deleteUser = id => {
        // setUsers(users.filter(user => user.id !== id));
    }

    const [editing, setEditing] = useState(false);

    const initialUser = {id: null, name: '', username: ''};

    const [currentUser, setCurrentUser] = useState(initialUser);

    const editUser = (id, user) => {
        // setEditing(true);
        // setCurrentUser(user);
    }

    const updateUser = (newUser) => {
        // setUsers(users.map(user => (user.id === currentUser.id ? newUser : user)))
        // setCurrentUser(initialUser)
        // setEditing(false)
    }

    console.log(usersState.users);

    return (
        <div className="container">
            <h1>React CRUD App with Hooks</h1>
            <div className="row">
                <div className="five columns">
                    { editing ? (
                        <div>
                            <h2>Edit user</h2>
                            <EditUserForm
                                currentUser={currentUser}
                                setEditing={setEditing}
                                updateUser={updateUser}
                            />
                        </div>
                    ) : (
                        <div>
                            <h2>Add user</h2>
                            <AddUserForm addUser={addUser} />
                        </div>
                    )}
                </div>
                <div className="seven columns">
                    <h2>View users</h2>
               {/*<DataList users={usersState.users} deleteUser={deleteUser} editUser={editUser}/>*/}
                    <UserTable users={usersState.users} deleteUser={deleteUser} editUser={editUser} />
                </div>
            </div>
        </div>
    )
}

export default DisplayPage;

{/*{props.users.map((user, index) =>*/}
{/*    <div key={index}>*/}
{/*        <h2>{user.name}</h2>*/}
{/*        <h2>{user.dateofBirth}</h2>*/}
{/*    </div>*/}
{/*)}*/}

import React, {useEffect, useState} from 'react'
import UserTable from './tables/UserTable';
import AddUserForm from './forms/AddUserForm';
import EditUserForm from './forms/EditUserForm';
import {getAllUsers, deleteUser} from "../client";

//PARENT
const DisplayPage = () => {

    const [usersState, setUsersState] = useState({users: []});

    useEffect(() => {
        fetchUsers();
        //deleteAUser(userId);
    }, []);

    function fetchUsers() {
        getAllUsers() //fetch('http://localhost:8080...)
            .then(res => res.json())
            .then(users => {
                setUsersState({
                    users: users
                })
                //console.log(users);

                //console.log(users[0].userId)
            })
    }

    function deleteAUser(userId) {
        console.log(userId)
        deleteUser(userId).then(() => {
            alert(`${userId} was deleted`);
            fetchUsers();
        }).catch(err => {
            alert(err);
        });
    }

    //console.log(usersState.users.userId)
    console.log(usersState)


    const addUser = (usersState) => {
    //const count = usersState.filter(item => item.name === '0').length;
        //user.userId = users.length + 1;

        //console.log(usersState)
       // const counterId = count + 1;
         //console.log(usersState.users);

        //setUsersState(...usersState, usersState);
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

    //console.log({usersState.users});

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
                    {/*how to pass props to userTable is seen below: */}
                    <UserTable //component
                        users={usersState.users} //1 props
                        deleteAUser={deleteAUser} //2 props(no need for parameters)
                        editUser={editUser} //3 props
                    />
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

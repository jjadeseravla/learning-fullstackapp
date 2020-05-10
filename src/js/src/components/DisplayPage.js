import React, {useEffect, useState} from 'react'
import UserTable from './tables/UserTable';
import AddUserForm from './forms/AddUserForm';
import EditUserForm from './forms/EditUserForm';
import {getAllUsers, deleteUser, updateUser} from "../client";

//PARENT
const DisplayPage = () => {

    const [usersState, setUsersState] = useState({users: []});
    const [editedUsersState, setEditedUsersState] = useState({userEdited: null});

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
                //console.log(users[0].userId)
            })
    }

    function deleteAUser(userId) {
        deleteUser(userId)
            .then(() => {
            alert(`${userId} was deleted`);
            fetchUsers();
        }).catch(err => {
            alert(err);
        });
    }

    function editAUser(user) {
        console.log("editAUser", user)
        updateUser(user)
            .then(() => {
                alert(`${user} was updated`);
                fetchUsers();
            }).catch(err => {
            alert(err);
        });
    }

    //console.log("out", usersState)


    const addUser = (usersState) => {
    //const count = usersState.filter(item => item.name === '0').length;
        //user.userId = users.length + 1;

        //console.log(usersState)
       // const counterId = count + 1;
         //console.log(usersState.users);

        //setUsersState(...usersState, usersState);
    }

    // const [editing, setEditing] = useState(false);
    // const initialUser = {userId: null, name: '', gender: '', dateofBirth: 0};
    // const [currentUser, setCurrentUser] = useState(initialUser);

    function showEditForm(userBeingEdited) {
        setEditedUsersState({
            userEdited: userBeingEdited
        })
    }

    function closeForm() {
        setEditedUsersState({
            userEdited: null
        })
    }

    // const editUser = (userId, user) => {
    //     setEditing(true);
    //     setCurrentUser(user);
    // }

    // const editTheUser = (newUser) => {
    //     const userArray = Object.values(usersState)
    //     //console.log("updateUser", userArray[0])
    //     setUsersState(userArray.map(theUser => (theUser.userId === currentUser.userId ? newUser : theUser)))
    //     setCurrentUser(initialUser)
    //     setEditing(false)
    // }

    return (
        <div className="container">
            <h1>CRUD App of React Hooks and Java Backend</h1>
            <div className="row">
                <div className="five columns">
                    { editedUsersState.userEdited ? (
                        <div>
                            <h2>Edit user</h2>
                            <EditUserForm
                                 currentUser={editedUsersState.userEdited}
                                 closeForm={closeForm}
                                // setEditing={setEditing}
                                //updateUser={editTheUser}
                                 editAUser={editAUser}
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
                        //editAUser={editAUser} //3 props
                        showEditForm={showEditForm}
                    />
                </div>
            </div>
        </div>
    )
}

export default DisplayPage;



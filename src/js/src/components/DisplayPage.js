import React, {useEffect, useState} from 'react'
import UserTable from './tables/UserTable';
import AddUserForm from './forms/AddUserForm';
import EditUserForm from './forms/EditUserForm';
import {getAllUsers, deleteUser, updateUser, insertNewUser} from "../client";

//PARENT
const DisplayPage = () => {

    const [usersState, setUsersState] = useState({users: []});
    const [editedUsersState, setEditedUsersState] = useState({userEdited: null});

    useEffect(() => {
        fetchUsers();
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
            alert(`${userId} has been deleted`);
            fetchUsers();
        }).catch(err => {
            alert(err);
        });
    }

    function editAUser(user) {
        updateUser(user)
            .then(() => {
                 alert(`${user.name} UPDATEd`);
                fetchUsers();
            }).catch(err => {
            alert(err);
        });
        console.log("no reaching")
    }

    function addANewUser(user) {
        insertNewUser(user)
            .then(() => {
                 alert(`${user.name} ADDed`);
                fetchUsers();
            }).catch(err => {
            alert(err);
        });
    }

    //showEditForm() and closeForm() are just toggling to edit form being visible
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

    return (
        <div className="container">
            <h1 data-testid="app-title">CRUD App of React Hooks and Java Backend</h1>
            <div className="row">
                <div className="five columns">
                    { editedUsersState.userEdited ? (
                        <div>
                            <h2>Edit user</h2>
                            <EditUserForm
                                 currentUser={editedUsersState.userEdited}
                                 closeForm={closeForm}
                                 editAUser={editAUser}
                            />
                        </div>
                    ) : (
                        <div>
                            <h2>Add user</h2>
                            <AddUserForm
                                 //currentUser={addedUsersState.userAdded}
                                addANewUser={addANewUser}
                            />
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
                       // showAddUser={showAddUser}
                    />
                </div>
            </div>
        </div>
    )
}

export default DisplayPage;



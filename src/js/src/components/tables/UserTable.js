import React from 'react';

//CHILD of DisplayPage
const UserTable = (props) => {

    return (
        <table data-testid="app-table">
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Gender</th>
                <th>DOB</th>
            </tr>
            </thead>
            <tbody>
            { props.users.length > 0 ? (
                props.users.map(user => {
                    // const {id, name, username} = user;
                    const {userId, name, gender, dateofBirth} = user;
                    console.log(props);
                    return (
                        <tr key={userId}>
                            <td>{userId}</td>
                            <td>{name}</td>
                            <td>{gender}</td>
                            <td>{dateofBirth}</td>
                            {/*cos thats what you get from backend*/}
                            <td>
                                <button data-testid="userTableDeleteButton" type="danger" onClick={() => props.deleteAUser(userId)}>Delete</button>
                                <button data-testid="userTableEditButton" onClick={() => {
                                    console.log(user)
                                    props.showEditForm(user)
                                    //props.showAddUser(user)
                                }
                                }>Edit</button>
                            </td>
                        </tr>
                    )
                })
            ) : (
                <tr key={""}>
                    <td colSpan={4}>No users found</td>
                </tr>
            )
            }
            </tbody>
        </table>
    )
}

export default UserTable;
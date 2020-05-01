import React from 'react';

export function UserTable(props) {
    console.log("*****************************" + JSON.stringify(props.users));
    return (
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>DOB</th>
            </tr>
            </thead>
            <tbody>
            { Object.keys(props.users).length > 0 ? (
                props.users.map(user => {
                    const {name, age} = user;
                    return (
                        <tr>
                            <td>{name}</td>
                            {/*<td>{new Date().getFullYear() - props.userAge}</td>*/}
                            <td>{JSON.stringify(props.dateOfBirth)}</td>
                            <td>
                                <button>Delete</button>
                                <button>Edit</button>
                            </td>
                        </tr>
                    )
                })
            ) : (
                <tr>
                    <td colSpan={4}>No users found</td>
                </tr>
            )
            }
            </tbody>
        </table>
    )
}
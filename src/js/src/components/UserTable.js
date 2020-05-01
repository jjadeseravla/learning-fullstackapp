import React from 'react';

export function UserTable(props) {
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
                    const {name, DOB} = user;
                    return (
                        <tr>
                            <td>{name}</td>
                            <td>{DOB}</td>
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
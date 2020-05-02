import React from 'react';

export function UserTable(props) {
    return (
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
            </tr>
            </thead>
            <tbody>
            { props.users.length > 0 ? (
                props.users.map(user => {
                    const {id, name} = user;
                    return (
                        <tr>
                            <td>{id}</td>
                            <td>{name}</td>
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
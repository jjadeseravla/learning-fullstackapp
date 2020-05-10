import fetch from 'unfetch';

export const getAllUsers = () => fetch('/api/v1/users');

export const addNewUser = (user) =>
    fetch('api/v1/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(user)
        //body: JSON.stringify({firstName: "David", secondName: "OLeary", email: "dol@gmail.com", gender:"MALE"})
    });

export const deleteUser = (userId) =>
    fetch(`api/v1/users/${userId}`, {
        method: 'DELETE'
    });
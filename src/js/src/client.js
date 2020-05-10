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

export const deleteUser = (userId) => //no curly brackets means it returns what fetch returns
    fetch(`api/v1/users/${userId}`, {
        method: 'DELETE'
    });

// export const deleteUser = (userId) => { //curly brackets needs a return
//     return fetch(`api/v1/users/${userId}`, {
//         method: 'DELETE'
//     });
// }

export const updateUser = (user) => {
    //user.age = 20
    return fetch(`api/v1/users/${user.userId}`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'PUT',
        body: JSON.stringify(user)
    });
}
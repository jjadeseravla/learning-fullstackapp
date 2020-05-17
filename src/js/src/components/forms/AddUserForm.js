import React, {useEffect, useState} from 'react';

const AddUserForm = (props) => {

    //const initUser = {id: null, name: '', gender: '', dateofBirth: 0};
    const initUser = {id: null, name: '', gender: '', age: 0};

    const [user, setUser] = useState(initUser); //what was

    const handleChange = e => {//destructuring
        const {name, value} = e.target; //same as const name = e.target.name and const value = e.target.value
        setUser({...user, [name]: value});
    }

    const handleSubmit = e => {
        console.log('-----------')
        e.preventDefault(); //prevents POST back to server
        console.log(user)
        if (user.name && user.gender && user.age) props.addANewUser(user);
    }

    return (
        <form>
            <label>Name</label>
            <input data-testid="app-addName" className="u-full-width" type="text" value={user.name} name="name" onChange={handleChange}/>
            <label>Gender</label>
            <input data-testid="app-addGender" className="u-full-width" type="text" value={user.gender} name="gender" onChange={handleChange}/>
            <label>Age</label>
            <input data-testid="app-addAge" className="u-full-width" type="text" value={user.age} name="age" onChange={handleChange}/>
            <button data-testid="addUserButton" className="button-primary" type="submit" onClick={handleSubmit}>Add New user</button>
            {/*<button type="submit" onClick={() => console.log(props)}>Test</button>*/}
        </form>
    )
}

export default AddUserForm;

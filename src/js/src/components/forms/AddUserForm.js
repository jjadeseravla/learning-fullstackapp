import React, {useEffect, useState} from 'react';

const AddUserForm = (props) => {

    //const initUser = {id: null, name: '', gender: '', dateofBirth: 0};
    const initUser = {id: null, name: ''};

    const [user, setUser] = useState(initUser); //what was

    const handleChange = e => {//destructuring
        const {name, value} = e.target; //same as const name = e.target.name and const value = e.target.value
        setUser({...user, [name]: value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (user.name && user.gender && user.age) props.addANewUser(user);
    }

    return (
        <form>
            <label>Name</label>
            <input className="u-full-width" type="text" value={user.name} name="name" onChange={handleChange}/>
            <label>Gender</label>
            <input className="u-full-width" type="text" value={user.gender} name="gender" onChange={handleChange}/>
            <label>Age</label>
            <input className="u-full-width" type="text" value={user.age} name="age" onChange={handleChange}/>
            <button data-testid="add-new-user-button" className="button-primary" type="submit" onClick={handleSubmit}>Add New user</button>
            {/*<button type="submit" onClick={() => console.log(props)}>Test</button>*/}
        </form>
    )
}

export default AddUserForm;

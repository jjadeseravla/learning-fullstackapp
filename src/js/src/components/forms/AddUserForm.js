import React, {useState} from 'react';

const AddUserForm = (props) => {

    //const initUser = {id: null, name: '', gender: '', dateofBirth: 0};
    const initUser = {id: null, name: ''};

    const [user, setUser] = useState(initUser);

    const handleChange = e => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        //if (user.name && user.gender) props.addUser(user);
        if (user.name) props.addUser(user);
    }

    return (
        <form>
            <label>Name</label>
            <input className="u-full-width" type="text" value={user.name} name="name" onChange={handleChange} />
            {/*<label>Gender</label>*/}
            {/*<input className="u-full-width" type="text" value={user.gender} name="gender" onChange={handleChange} />*/}
            {/*<input className="u-full-width" type="number" value={user.dateofBirth} name="dateofBirth" onChange={handleChange} />*/}
            <button className="button-primary" type="submit" onClick={handleSubmit} >Add user</button>
        </form>
    )
}

export default AddUserForm;
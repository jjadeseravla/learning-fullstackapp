import React, {useState, useEffect} from 'react';

const EditUserForm = (props) => {

    useEffect(() => {
        setUser(props.currentUser)
    }, [props])

    const [user, setUser] = useState(props.currentUser);

    const handleChange = e => { //destructuring
        const {name, value} = e.target;
        setUser({...user, [name]: value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (user.name && user.gender && user.age) props.editAUser(user);
        console.log(props.editAUser(user));
    }

    return (
        <form>
            <label>Edit the Name</label>
            <input className="u-full-width" type="text" value={user.name} name="name" onChange={handleChange} />
            <label>Edit the Gender</label>
            <input className="u-full-width" type="text" value={user.gender} name="gender"onChange={handleChange} />
            <label>Edit the Age</label>
            <input className="u-full-width" type="text" value={user.age} name="age" onChange={handleChange} />
            <button className="button-primary" type="submit" onClick={handleSubmit} >Edit user</button>
            <button type="submit" onClick={() => props.closeForm} >Cancel</button>
        </form>
    )
}

export default EditUserForm;
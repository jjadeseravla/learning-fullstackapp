import React, {useEffect, useState} from 'react';
import { useForm } from "react-hook-form";

const AddUserForm = (props) => {

    //const initUser = {id: null, name: '', gender: '', dateofBirth: 0};
    const initUser = {id: null, name: '', gender: '', age: 0};
    const { register, errors, handleSubmit } = useForm();

    const [user, setUser] = useState(initUser); //what was

    const handleChange = e => {//destructuring
        const {name, value} = e.target; //same as const name = e.target.name and const value = e.target.value
        setUser({...user, [name]: value});
    }

    const handleSubmitt = (e) => {
        // console.log('-----------')
        // e.preventDefault(); //prevents POST back to server
        // console.log(user)
        // if (user.name && user.gender && user.age)
            props.addANewUser(user);
    }

    return (
        <form>
            <label>Name</label>
            <input data-testid="app-addName" className="u-full-width" type="text" value={user.name} name="name" ref={register({ required: true, maxLength: 20 })} onChange={handleChange}/>
            {errors.name && errors.name.type === "required" && <span style={{ color: "red" }}>Name is required</span>}
            {errors.name && errors.name.type === "maxLength" && <span style={{ color: "red" }}>Max length exceeded</span> }

            <label>Gender</label>
            <input data-testid="app-addGender" className="u-full-width" type="text" value={user.gender} name="gender" ref={register({ required: true })} onChange={handleChange}/>
            {errors.gender && errors.gender.type === "required" && <span style={{ color: "red" }}>Enter "MALE" or "FEMALE"</span>}

            <label>Age</label>
            <input data-testid="app-addAge" className="u-full-width" type="text" value={user.age} name="age" ref={register({ required: true })}onChange={handleChange}/>
            {errors.age && errors.age.type === "required" && <span style={{ color: "red" }}>Age is required</span>}
            <button data-testid="addUserButton" className="button-primary" type="submit" onClick={handleSubmit(handleSubmitt)}>Add New user</button>
            {/*<button type="submit" onClick={() => console.log(props)}>Test</button>*/}
        </form>
    )
}

export default AddUserForm;

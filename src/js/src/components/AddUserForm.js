import React, {useState} from 'react';
import { addNewUser } from "./client";

export function AddUserForm(props) {

    const initUser = {id: null, userName: ""};

    const [user, setUser] = useState(initUser);

    return (
        <form>
            <label>This should be where the name you entered goes</label>
            <input className="u-full-width" type="text" name="userName" value={user.userName}/>
            <button className="button-primary" type="submit">Add user</button>
        </form>
    )
}

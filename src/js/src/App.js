import React, {useState} from 'react';
import './App.css';
import { userList } from './data.js';
import {UserTable} from './components/UserTable';

function App() {

    const [users, setUsers] = useState(userList);

    return (
        <div className="container">
            <h1>People who Use</h1>
            <div className="row">
                <div className="five columns">
                    <h2>Add user</h2>
                </div>
                <div className="six columns">
                    <h2>View users</h2>
                    <UserTable users={users}/>
                </div>
            </div>
        </div>
    );
}

export default App;

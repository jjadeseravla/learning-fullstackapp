import React from 'react';
import './App.css';
import { DisplayUsers } from "./components/DisplayUsers";
import { FormBox } from "./components/FormBox";

function App() {

    // const [state, setState] = useState([]);
    //
    // useEffect(() => {
    //     fetchUsers();
    // }, []);
    //
    // function fetchUsers() {
    //     getAllUsers()
    //         .then(res => res.text()
    //             .then(users => {
    //                 console.log("users: " + users);
    //             }))
    // }

  return (
    <div className="container">
        <h1>USERS</h1>
        <div className="row">
            <div className="five columns">
                <h2>Add user</h2>
            </div>
            <div className="seven columns">
                <h2>View users</h2>
            </div>
        </div>
        <FormBox/>
        <DisplayUsers/>
    </div>
  );
}

export default App;

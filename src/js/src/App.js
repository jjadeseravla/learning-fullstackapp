import React from 'react';
import './App.css';
import { DisplayUsers } from "./components/DisplayUsers";

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
    <div className="App">
        <h1>USERS</h1>
        <DisplayUsers/>
    </div>
  );
}

export default App;

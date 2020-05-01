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
    <div className="App">
        <h1>USERS</h1>
        <FormBox/>
        <DisplayUsers/>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import { getAllUsers } from './client';

function App() {
    //
    //     getAllUsers()
    //         .then(res => res.json()
    //             .then(users => {
    //     console.log(users);
    // }))

    getAllUsers()
        .then(res => res.text()
            .then(users => {
                console.log("ooooo" + users);
            }))

  return (
    <div className="App">
        <h1>work bitch</h1>
    </div>
  );
}

export default App;

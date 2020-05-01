import React, {useState} from 'react';
import './App.css';
import { DisplayUsers } from "./components/DisplayUsers";
import { FormBox } from "./components/FormBox";

function App() {

  return (
    <div className="container">
        <h1>People who Use</h1>
        <div className="row">
            <div className="five columns">
                <h2>Add user</h2>
            </div>
            <div className="six columns">
                <h2>View users</h2>
            </div>
        </div>
        <FormBox/>
        <DisplayUsers/>
    </div>
  );
}

export default App;

import React from 'react';

const AddUser =(props)=>{
    const addUserHandler=(event)=>{
        event.preventDefault();
    };
    return(
        <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <label id="username" type="text"/>
        <label id="age" type="number"/>
        <button type="submit">Add User</button>
        </form>
    );
};
export default AddUser;
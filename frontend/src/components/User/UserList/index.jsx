import React from "react";

const User =({ user })=> {
    return (
      <>
      <div className="user-container border">
        <h2 className="user">{`${user.first_name} ${user.last_name}`}</h2>
        <p className="user">Email: {user.email}</p>
        <button className="btn-user">Remove</button>
      </div>
      </>
    );
  }  


  export default User
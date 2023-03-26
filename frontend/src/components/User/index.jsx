import React from "react";

const User =({ user })=> {
    return (
      <div className="User-container">
        <h2>{`${user.first_name} ${user.last_name}`}</h2>
        <p>Email: {user.email}</p>
      </div>
    );
  }  


  export default User
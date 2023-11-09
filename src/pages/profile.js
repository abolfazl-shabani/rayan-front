import React from "react";

const Profile = ({ user }) => {
  console.log(user);
  return (
    <>
      <h1>hi {user.name} </h1>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <h2>(email) {user.email}</h2>
    </>
  );
};

export default Profile;

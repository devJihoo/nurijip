import { authService } from "fbase";
import React from "react";

const Profile = () => {
  const onLogOutClick = () => {
    authService.signOut();
  };
  return (
    <div className="padding">
      <button className="button" onClick={onLogOutClick}>
        Sign Out
      </button>
    </div>
  );
};

export default Profile;

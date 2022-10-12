import React from "react";
import HighlightIcon from "@material-ui/icons/Highlight";
import { getAuth, signOut } from "firebase/auth";
import {auth} from "../firebase";



function Header(props) {
  const logout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        props.auth(true);
        // console.log("dgxdgfh");
      })
      .catch((error) => {
        console.log(error)
      });
  };
  return (
    <header>
      <div>
        {" "}
        <h1>
          {" "}
          <HighlightIcon style ={{fontSize: "50px"}}/> Keeper{" "}
          <p className="header_name">{auth.currentUser.displayName}</p>
          <i className="bi bi-box-arrow-right header_icon"  onClick={logout}> </i>
        </h1>{" "}
      </div>
    </header>
  );
}

export default Header;

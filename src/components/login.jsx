import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider, db } from "../firebase";
import { Button } from "@material-ui/core";
import HighlightIcon from "@material-ui/icons/Highlight";

import "./login.css";
function login(props) {
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        var docRef = db.collection("notes").doc(auth.currentUser.email);
        docRef
          .get()
          .then((doc) => {
            if (!doc.exists) {
                db.collection("notes").doc(auth.currentUser.email).set({items:[]});
            }
          })
          .catch((error) => {
            console.log("Error getting document:", error);
          });
        console.log(result);
        props.auth(false);
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login_container">
        <h1 className="login_icon">
          {" "}
          <HighlightIcon style={{ fontSize: "100px" }} />
        </h1>
        <div className="login_text">
          <h1>Sign in to Keeper</h1>
        </div>
        <Button type="submit" onClick={signIn}>
          Sign in With Google
        </Button>
      </div>
    </div>
  );
}

export default login;

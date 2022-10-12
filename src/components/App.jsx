import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import Login from "./login";
import { firebase,db, auth as auth2 } from "../firebase";

function App() {
  var [allItems, setAllItems] = useState([]);
  var [auth, setAuth] = useState(true);
  useEffect(() => {
    var docRef = db.collection("notes").doc(auth2.currentUser?.email);

    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          setAllItems(doc.data().items);
        } else {
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  });

  function addItem(item) {
    var docRef = db.collection("notes").doc(auth2.currentUser.email);

    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          setAllItems(doc.data().items);
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }
  function deleteItem(obj) {
    var docRef = db.collection("notes").doc(auth2.currentUser.email);
    docRef
      .update({
        items: firebase.firestore.FieldValue.arrayRemove(obj),
      })
      .then(() => {
        docRef = db.collection("notes").doc(auth2.currentUser.email);
        docRef
          .get()
          .then((doc) => {
            if (doc.exists) {
              setAllItems(doc.data().items);
            } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
            }
          })
          .catch((error) => {
            console.log("Error getting document:", error);
          });
      });
  }

  return (
    <div>
      {auth ? (
        <Login auth={setAuth} />
      ) : (
        <div>
          <Header auth={setAuth} />
          <CreateArea click={addItem} />
          {allItems.map((item, index) => {
            return (
              <Note
                key={index}
                click={deleteItem}
                title={item.title}
                content={item.content}
                id={index}
              />
            );
          })}
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;

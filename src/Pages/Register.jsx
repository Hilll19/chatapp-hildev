import React, { useState } from "react";
import Add from "../image/label.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import {  ref, uploadBytesResumable, getDownloadURL,} from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate;

  // Declare onSubmit "handleSubmit" from register submit form
  const handleSubmit = async (e) => {
    // So that when we click button, page wont reload
    e.preventDefault();
    // for checking what we want to input value can check console.log(e.target[0].value)
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      // Register new user auth, email and password and Declare variable res so we can call 
      const res = await createUserWithEmailAndPassword(auth, email, password);
      //Get reference to firebase storage use displayName as name file
      const storageRef = ref(storage, displayName);
      //Upload image to firrebase storage
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          setErr(true);
        },
        () => {
          // If image succes to upload, get url image from firebase storage
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user,{
              displayName,
              photoURL: downloadURL,
            });
            //To save users information use uid as id document
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "userChats", res.user.uid), {})
            // We can navigate to home page after sign up in register page
            navigate("/") //Will direct to home 
          });
        }
      );
      
      
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className="formcontainer">
      <div className="formWrapper">
        <span className="logo">Chat App</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="displayName" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an Avatar</span>
          </label>
          <button>sign up</button>
          {/* When code error or wrong this text will showing in page */}
          {err && <span>Something went wrong</span>}
        </form>
        <p>You do have an account ? Login</p>
      </div>
    </div>
  );
};

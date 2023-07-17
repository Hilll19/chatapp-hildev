import React, { useState } from "react";
import Add from "../image/label.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage } from "../firebase";
import {  ref, uploadBytesResumable, getDownloadURL,} from "firebase/storage";

export const Register = () => {
  const [err, setErr] = useState(false);
  const handleSubmit = async (e) => {
    // So that when we click button, page wont reload
    e.preventDefault();
    // for checking what we want to input value can check console.log(e.target[0].value)
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res);
      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) => {
            await updateProfile(res.user,{})
            displayName,
            photoURL: downloadURL,
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
          {err && <span>Something went wrong</span>}
        </form>
        <p>You do have an account ? Login</p>
      </div>
    </div>
  );
};

"use client";

import styles from "./styles.module.css";
import { useState } from "react";
import { logIn, logOut } from "@/redux/Features/authenticate/authenticate";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { useAppSelector } from "@/redux/store";
import Link from "next/link";
import Header from "../components/header/Header";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../apis/firebase";

const UserAccount = () => {
  const dispatch = useDispatch<AppDispatch>();
  const userNameFromStore = useAppSelector(
    (state) => state.authReducer.value.userName
  );

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isAuth, setIsAuth] = useState(false);

  const onClickLogin = () => {
    dispatch(logIn(userName));
    setIsAuth(true);
  };

  const onClickLogout = () => {
    dispatch(logOut());
    setIsAuth(false);
    setUserName("");
  };

  function onClickSignUp(): void {
    createUserWithEmailAndPassword(firebaseAuth, userName, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log("*** user is in ***", user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("*** error is in ***", errorCode, errorMessage);
        // ..
      });
  }

  return (
    <div>
      <Header />
      <div className={styles.authCard}>
        <input
          className={styles.input}
          type="text"
          placeholder="Username"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <br />
        <input
          className={styles.input}
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <br />
        <button className={styles.button} onClick={onClickLogin}>
          Login
        </button>
        <button className={styles.button} onClick={onClickLogout}>
          Logout
        </button>
        <button className={styles.button} onClick={onClickSignUp}>
          SignUp
        </button>
        <br />
        <br />
      </div>
      <h2>Username: {userNameFromStore}</h2>
      <Link href="/home">Home</Link>
    </div>
  );
};

export default UserAccount;

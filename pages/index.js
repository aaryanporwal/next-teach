/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlX3AGMl0hZ_BiwAbDSPQzw3vTHhfEpzE",
  authDomain: "geoloco-a32e3.firebaseapp.com",
  databaseURL: "https://geoloco-a32e3-default-rtdb.firebaseio.com",
  projectId: "geoloco-a32e3",
  storageBucket: "geoloco-a32e3.appspot.com",
  messagingSenderId: "501684827293",
  appId: "1:501684827293:web:b7bed780159ffe6b459074",
  measurementId: "G-ET9VK0C9HH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the database service
import { getDatabase, ref, onValue } from "firebase/database";

export default function Home() {
  // console.log("hi");

  // useEffect hook

  // onValue(AttendanceRef, (snapshot) => {
  //   // console.log("value event fired on attendance object");
  //   // setAttendance(snapshot.val());
  //   // set timeout 2 seconds
  //   setTimeout(() => {
  //     setAttendance(snapshot.val());
  //   }, 5000);

  const [attendance, setAttendance] = useState([]);
  useEffect(() => {
    const db = getDatabase();
    const AttendanceRef = ref(db, "Attendance");
    onValue(AttendanceRef, (snapshot) => {
      setAttendance(snapshot.val());
    });
  }, []);

  console.log(attendance);

  // subjarray = Object.keys(attendance)

  // console.log(attendanceObject);

  // let subjectsAnchorElement = document.createElement("a");
  // let subjectNameText = document.createTextNode(
  //   Object.keys(attendanceObject)[0]
  // );

  // subjectsAnchorElement.setAttribute("href", "https://google.com");
  // subjectsAnchorElement.appendChild(subjectNameText);
  // document.body.appendChild(subjectNameText);
  // });

  return (
    <div>
      <h1 className="text-3xl text-center ">Teacher&apos;s Portal</h1>
      <br />

      {JSON.stringify(attendance, null, 2)}
    </div>
  );
}

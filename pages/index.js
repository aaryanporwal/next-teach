import { SubjectList } from "../components/SubjectList";
import { useState, useEffect } from "react";

import { initializeApp } from "firebase/app";

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

const app = initializeApp(firebaseConfig);

import { getDatabase, ref, onValue } from "firebase/database";

export default function Home() {
  const [attendance, setAttendance] = useState([]);
  useEffect(() => {
    const db = getDatabase();
    const AttendanceRef = ref(db, "Attendance");
    onValue(AttendanceRef, (snapshot) => {
      setAttendance(snapshot.val());
    });
  }, []);

  console.log(JSON.stringify(attendance, null, 2));

  let subjectArray = Object.keys(attendance);

  return (
    <div>
      <h1 className="text-3xl text-center mt-10">Teacher&apos;s Portal</h1>
      
      <SubjectList subjectArray={subjectArray} />

      {/* <pre>{JSON.stringify(attendance, null, "\t")}</pre> */}
    </div>
  );
}

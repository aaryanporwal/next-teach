import { useState, useEffect } from "react";
import { Table } from "../components/Table";

import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_apiKey,
  authDomain: process.env.NEXT_PUBLIC_authDomain,
  databaseURL: process.env.NEXT_PUBLIC_databaseURL,
  projectId: process.env.NEXT_PUBLIC_projectId,
  storageBucket: process.env.NEXT_PUBLIC_storageBucket,
  messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
  appId: process.env.NEXT_PUBLIC_appId,
  measurementId: process.env.NEXT_PUBLIC_measurementId,
};
const app = initializeApp(firebaseConfig);

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
      <h1 className="text-5xl underline text-center mt-8">
        Teacher&apos;s Portal
      </h1>
      <Table subjectArray={subjectArray} title="Subjects" />
    </div>
  );
}

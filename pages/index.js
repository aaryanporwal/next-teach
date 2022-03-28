import { useState, useEffect } from "react";
// import { Table } from "../components/Table";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import dynamic from "next/dynamic";
const DynamicReactJson = dynamic(import("react-json-view"), { ssr: false });

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

initializeApp(firebaseConfig);

export default function Home() {
  useEffect(() => {
    const db = getDatabase();
    const AttendanceRef = ref(db, "Attendance");
    onValue(AttendanceRef, (snapshot) => {
      setAttendance(snapshot.val());
    });
  }, []);
  const [attendance, setAttendance] = useState([]);

  console.log(JSON.stringify(attendance, null, 2));

  let subjectArray = Object.keys(attendance);

  return (
    <div>
      <h1 className="text-5xl underline text-center mt-8">
        Teacher&apos;s Portal
      </h1>
      {/* <Table subjectArray={subjectArray} title="Subjects" /> */}
      <div className="flex items-center justify-center mt-16">
        <DynamicReactJson
          src={attendance}
          theme="monokai"
          name="Click here to view Subject wise attendance"
          collapsed={true}
          displayDataTypes={false}
          displayObjectSize={false}
          enableClipboard={false}
        />
      </div>
    </div>
  );
}

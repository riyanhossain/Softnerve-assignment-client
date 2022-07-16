import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import Card from "../components/Card/Card";

export default function Students() {
  const [studentList, setStudentList] = useState([]);
  const fetchStudents = useCallback(async () => {
    const res = await axios.get(`https://softnerve-student.herokuapp.com/api/v1/student`);
    setStudentList(res.data.students);
  }, []);
  useEffect(() => {
    fetchStudents();
  }, [fetchStudents, studentList]);
  console.log(studentList);
  return (
    <section className="flex justify-center">
      <div className="w-[75rem] flex flex-col justify-center items-center gap-y-4">
        {studentList &&
        studentList.map((student, index) => {
        return <Card key={index} student={student}  />;
      })}
        {studentList.length === 0 && <h1>No Students found</h1>}
      </div>
    </section>
  );
}

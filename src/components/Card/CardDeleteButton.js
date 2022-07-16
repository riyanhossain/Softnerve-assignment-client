import React from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CardDeleteButton(props) {
  const { id } = props;
  const deleteStudent = async () => {
    const res = await axios.delete(
      `https://softnerve-student.herokuapp.com/api/v1/student/${id}`
    );
    toast(`${res.data.message}`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <div className="w-full">
      <button className="bg-red-500 hover:bg-red-700 text-white p-1 w-full" onClick={()=>deleteStudent()}>
        Delete
      </button>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

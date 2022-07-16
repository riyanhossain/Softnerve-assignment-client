import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";

export default function UpdateStudent() {
  const { id } = useParams();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    class: "",
    rollno: "",
    address: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `https://softnerve-student.herokuapp.com/api/v1/student/${id}`
      );
      setInputs(res.data.student);
    };
    fetchData();
  }, [id]);

  const handleInputs = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  const updateStudent = async (e) => {
    try {
      const res = await axios.patch(
        `https://softnerve-student.herokuapp.com/api/v1/student/${id}`,
        inputs
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
    } catch (err) {}
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    updateStudent();
    setInputs({
      name: "",
      email: "",
      class: "",
      rollno: "",
      address: "",
    });
  };
  return (
    <section
      className="flex justify-center items-center"
      style={{ minHeight: "calc(100vh - 3.5rem)" }}
    >
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

      <div className="w-[36rem] h-[30rem] bg-white flex flex-col justify-center items-center mb-14">
        <h1 className="text-3xl font-bold mb-4">Update Student</h1>
        <form
          className="flex flex-col justify-center items-center w-10/12 gap-y-8"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="name"
            className="w-full bg-[#F0F2F3] p-2"
            autoComplete="name"
            required
            name="name"
            value={inputs.name}
            onChange={handleInputs}
          />
          <input
            type="email"
            name="email"
            placeholder="email"
            className="w-full bg-[#F0F2F3] p-2"
            autoComplete="email"
            value={inputs.email}
            onChange={handleInputs}
            required
          />
          <input
            type="string"
            name="class"
            placeholder="class"
            className="w-full bg-[#F0F2F3] p-2"
            autoComplete="class"
            value={inputs.class}
            onChange={handleInputs}
            required
          />
          <input
            type="number"
            name="rollno"
            placeholder="rollno"
            className="w-full bg-[#F0F2F3] p-2"
            autoComplete="rollno"
            value={inputs.rollno}
            onChange={handleInputs}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="address"
            className="w-full bg-[#F0F2F3] p-2"
            autoComplete="address"
            value={inputs.address}
            onChange={handleInputs}
            required
          />

          <input
            type="submit"
            value="Update Student"
            className="w-full bg-[#029FAE] p-2 font-semibold text-white"
          />
        </form>
      </div>
    </section>
  );
}

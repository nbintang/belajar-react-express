import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export const useAddData = () => {
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [npm, setNpm] = useState("");
  const [gender, setGender] = useState("Male");
  const navigate = useNavigate();

  const saveData = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/users", {
        nama,
        alamat,
        npm,
        gender
      })
      navigate("/")

    } catch (error) {
      console.log(error);
    }
  }
return {
  saveData,
  nama,
  alamat,
  npm,
  gender,
  setNama,
  setAlamat,
  setNpm,
  setGender
}
}
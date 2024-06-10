import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export const useEditData = () => {
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [npm, setNpm] = useState("");
  const [gender, setGender] = useState("Male");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserById();
  }, [])
  const updateData = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:3000/users/${id}`, {
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

  const getUserById = async () => {
    const { data } = await axios.get(`http://localhost:3000/users/${id}`)
    setNpm(data.npm)
    setAlamat(data.alamat)
    setNama(data.nama)
    setGender(data.gender)

  }
  return {
    setNpm,
    setAlamat,
    setNama,
    setGender,
    updateData,
    npm,
    alamat,
    nama,
    gender
  }

}

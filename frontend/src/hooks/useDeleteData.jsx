import React, { useEffect } from 'react'
import { useGetData } from './useGetData'
import axios from 'axios';
const useDeleteData = () => {
  useGetData();

  const deleteData = async (id) => {
  try {
    await axios.delete(`http://localhost:3000/users/${id}`)
    useGetData();
  } catch (error) {
    console.log(error);
  }
  }
  return deleteData
}

export default useDeleteData;
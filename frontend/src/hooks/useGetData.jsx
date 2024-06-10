import { useEffect, useState } from 'react';
import axios from 'axios';

export const useGetData = () => {
  const [users, setUsers] = useState([]);
  const API_URL = 'http://localhost:3000/users';
  const getUsers = async (URL) => {
    try {
      const { data } = await axios.get(URL)
      setUsers(data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getUsers(API_URL)
  }, [])
  return users
}
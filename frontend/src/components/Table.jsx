import { useEffect, useState } from 'react'
import { useGetData } from '../hooks/useGetData'
import { ButtonUI } from './Button';
import { Link } from 'react-router-dom';
import useDeleteData from '../hooks/useDeleteData';
const Table = () => {
  const deleteData = useDeleteData();
  const users = useGetData();
  const name = users.map(e=> e.nama)
  console.log(name)
  return (
    <div className="overflow-x-auto">
      <Link to={"/add"}><ButtonUI className={"btn-primary"}>Add User</ButtonUI></Link>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Nama</th>
            <th>NPM</th>
            <th>Alamat</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody >
          {/* row 1 */}
          {users.map(({ id, nama, alamat, npm, gender },index ) => {
            return (
              <>

                <tr key={id} className='space-x-1'>
                  <th>{index + 1}</th>
                  <td>{nama}</td>
                  <td>{npm}</td>
                  <td>{alamat}</td>
                  <td>{gender}</td>
                  <Link to={`/edit/${id}`}> <ButtonUI className="btn-info btn-sm ">Edit</ButtonUI></Link>
                  <Link onClick={() => deleteData(id)}><ButtonUI className="btn-error btn-sm">Delete</ButtonUI></Link>
                </tr>

              </>
            )
          })}


        </tbody>
      </table>
    </div>
  )
}

export default Table

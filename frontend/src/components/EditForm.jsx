import React from 'react'
import { useEditData } from '../hooks/useEditData'
import { IoMdPerson } from 'react-icons/io'
import { IoLocationSharp } from 'react-icons/io5'

export const EditForm = () => {
  const { setNpm, setAlamat, setNama, setGender, updateData, npm, alamat, nama, gender } = useEditData()
  return (
    <div className='  w-96  p-4 rounded'>
      <h1 className="text-lg mb-1">Masukkan Data</h1>
      <form action="http://localhost:3000/users" className='form flex flex-col gap-3' onSubmit={updateData} >
        <label className="input input-bordered flex items-center gap-2">
          <IoMdPerson />
          <input type="text" className="grow" placeholder="Nama" value={nama} onChange={e=>  setNama(e.target.value)} name="nama" />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <IoLocationSharp />
          <input type="text" className="grow" placeholder="Alamat" value={alamat} onChange={e=>  setAlamat(e.target.value)} name="alamat" />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <h1 className="text-sm font-bold">NPM</h1>
          <input type="text" className="grow" placeholder="masukkan NPM" value={npm} name="npm" onChange={(e) => setNpm(e.target.value)} />
        </label>

        <label htmlFor="gender" className="w-full text-start">pilih gender</label>
        <select value={gender} name="gender" onChange={(e) => setGender(e.target.value)} className="select select-bordered w-full ">
          <option disabled selected value={"Male"}>Laki-laki</option>
          <option value={"Female"}>Perempuan</option>
        </select>
        <button type="submit" className="btn btn-primary w-full">Submit</button>
      </form>
    </div>
  )
}

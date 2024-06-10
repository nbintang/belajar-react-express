import FormUI from "./components/Form"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Table from "./components/Table"
import { EditForm } from "./components/EditForm"


function App() {

  return (
    <>
      <div className="w-full overflow-hidden h-screen grid place-items-center">
        <div className='flex gap-3'>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Table />} />
              <Route path="add" element={<FormUI />} />
              <Route path="edit/:id" element={<EditForm />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  )
}

export default App

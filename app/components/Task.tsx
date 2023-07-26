
"use client"
import { Itask } from "../../types/tasks"
import { FiEdit, FiTrash2 } from "react-icons/fi"
import { useState, FormEventHandler } from 'react'
import Modal from "./Modal"
import {useRouter} from "next/navigation"
import { deleteTodo, editTodo } from "../../api"
import { v4 as uuidv4 } from 'uuid';

interface TaskProps {
    task: Itask
}

const Task: React.FC<TaskProps> = ({task}) => {
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false)
  const [openModalDelete, setOpenModalDelete] = useState<boolean>(false)
  const [taskToEdit, setTaskToEdit] = useState<string>(task.text)

  const router = useRouter()

  const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    await editTodo({
      id: task.id,
      text: taskToEdit
    })
    setTaskToEdit("")
    setOpenModalEdit(false)
    router.refresh()
  }

  const handleDeleteTask = async (id: string) => {
    await deleteTodo(id)
    setOpenModalDelete(false)
    router.refresh()
  }

  return (
    <tr key={ task.id }>
        <td>{ task.text }</td>
        <td className="flex gap-2">
          <FiEdit 
            onClick={() => setOpenModalEdit(true)}
            className="text-blue-500 cursor-pointer delay-150 duration-200 ease-in-out hover:text-blue-700"
            size={25}
          />
          <Modal modalOpen={ openModalEdit } setModalOpen={setOpenModalEdit}> 
            <form onSubmit={handleSubmitEditTodo}>
              <h3 className='font-bold text-lg'>
                Edit task
              </h3>
              <div className="modal-action">
                <input
                  value={taskToEdit}
                  onChange={(e) => setTaskToEdit(e.target.value)}
                  type="text" 
                  placeholder="Type here" 
                  className="input input-bordered w-full" 
                />
                <button type='submit' className='btn'>
                  Submit
                </button>
              </div>
            </form> 
          </Modal>
          <FiTrash2
            onClick={() => setOpenModalDelete(true)} 
            className="text-red-500 cursor-pointer hover:text-red-700 delay-150 duration-200 ease-in-out"
            size={25}
          />
          <Modal modalOpen={ openModalDelete } setModalOpen={setOpenModalDelete}> 
             <h3 className="text-lg">Are you sure you want to delete this task ?</h3>
             <div className="mt-4 flex gap-2">
              <button
                className="btn btn-primary" 
                onClick={() => handleDeleteTask(task.id)}
              >
                yes
              </button>
              <button
                className="btn btn-error my" 
                onClick={() => setOpenModalDelete(false)}
              >
                No
              </button>
             </div>
          </Modal>
        </td>
    </tr> 
  )
}

export default Task
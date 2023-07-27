
"use client"
import { Itask } from "../../types/tasks"
import Task from "./Task"
import Lottie, { LottieRefCurrentProps } from 'lottie-react'
import animationData from './../assets/phone-animations.json'

import { useRef } from 'react'

interface TodoListProps {
    tasks: Itask[]
}

const TodoList: React.FC<TodoListProps> = ( { tasks } ) => {
  const phoneRef = useRef<LottieRefCurrentProps>(null)
  return (
    <div className="overflow-x-auto">
        <table className="table w-full">
            <thead>
            <tr>
                <th>Task</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            { tasks.map(task => <Task key={task.id} task={task} /> ) } 
            </tbody>
        </table>
        <Lottie 
          lottieRef={phoneRef} 
          animationData={animationData} 
          size={30}
          onComplete={() => {
            phoneRef.current?.setDirection(-1)
            phoneRef.current.play()
          }}
          loop={true}
        />
    </div>
  )
}

export default TodoList
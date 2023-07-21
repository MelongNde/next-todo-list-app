
import { Itask } from "@/types/tasks"
import Task from "./Task"

interface TodoListProps {
    tasks: Itask[]
}

const TodoList: React.FC<TodoListProps> = ( { tasks } ) => {
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
    </div>
  )
}

export default TodoList
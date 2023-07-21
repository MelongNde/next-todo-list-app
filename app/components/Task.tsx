import { Itask } from "../../types/tasks"

interface TaskProps {
    task: Itask
}

const Task: React.FC<TaskProps> = ({task}) => {
  return (
    <tr key={ task.id }>
        <td>{ task.text }</td>
    </tr> 
  )
}

export default Task
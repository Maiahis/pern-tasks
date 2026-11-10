import { Card, Button } from '../ui';
import { useTasks } from '../../context/TaskContext';
import { useNavigate } from 'react-router-dom';
import { PiTrashSimple } from "react-icons/pi";
import { BsPencil } from "react-icons/bs";

function TaskCard({ task }) {
    const { deleteTask } = useTasks();
    const navigate = useNavigate();

    return (
        <Card key={task.id} className='px-7 py-4 flex flex-col justify-center'>
            <div>
              <h1 className='text-2xl font-bold'>{task.title}</h1>
            <p>{task.description}</p>
            </div>
            <div className='my-2 flex justify-end gap-x-2'>
              <Button onClick={() => navigate(`/tasks/${task.id}/edit`)}>
              <BsPencil className='text-xs' /> Editar </Button>
             <Button  className='bg-red-600 hover:bg-red-800'
                onClick={async () => {
                if (window.confirm('¿Estás seguro de eliminar esta tarea?')) {
                  deleteTask(task.id);
              }
            }}
            > <PiTrashSimple className='text-xl' />
              Eliminar</Button>
            </div>
            
        </Card>
    )
}

export default TaskCard;
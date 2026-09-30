import Router from 'express-promise-router';
import { getAllTasks,
     getTask,
     createTask, 
     updateTask, 
     deleteTask 
    } from '../controllers/tasks.controllers.js';
import { isAuth } from '../middlewares/auth.middlewares.js';

const router = Router();

router.get('/tasks', isAuth, getAllTasks);

router.get('/tasks/:id', isAuth, getTask);

router.post('/tasks', isAuth, createTask);

router.put('/tasks/:id', isAuth, updateTask);

router.delete('/tasks/:id',isAuth, deleteTask);

export default router;


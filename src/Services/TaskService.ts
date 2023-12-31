import { Task } from '../types/Task';

const BASE_URL = "https://back-task-7plp.onrender.com/tasks";

export const TaskService = {
//obtener todas las tareas
    getAllTasks: async (): Promise<Task[]> => {
        const response = await fetch(`${BASE_URL}`);
        const data = await response.json();
        return data;
    },
//obtener una tarea
    getOneTasks: async (id: number): Promise<Task> => {
        const response = await fetch(`${BASE_URL}/${id}`);
        const data = await response.json();
        return data;
    },

//obtener tarea de una categoria
    getTasksInCategory: async (category: string): Promise<Task[]> => {
        const response = await fetch(`${BASE_URL}?estado=${category}`);
        const data = await response.json();
        return data;
    },
//eliminar una tarea
    deleteTask: async (id: number):Promise<void>=>{
        await fetch(`${BASE_URL}/${id}`,{
            method: 'DELETE',
        });
    },
//actualizar una tarea
    updateStateTask: async (id: number, newState: string): Promise<Task> => {
        return fetch(`${BASE_URL}/${id}`,
        {
            method: 'PATCH',
            headers: {
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                estado: newState
            })

        })
        .then(res => res.json())
        .then(json =>{
            return json;
        })
        .catch(error => error);
        
    },
//crear una tarea
    createTask: async (task: Task) : Promise<Task> =>{
        const response = await fetch(`${BASE_URL}`,{
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        });
        const data = await response.json();
        return data;
    },

};
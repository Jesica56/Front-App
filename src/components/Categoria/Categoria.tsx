import { useEffect, useState } from 'react';
import { TaskService } from '../../Services/TaskService';
import { Task } from '../../types/Task';
import CategoriasSelector from '../CategoriaSelector/CategoriaSelect';
import CategoriasTareas from '../CategoriaTarea/CategoriaTarea';

const Categorias = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>(''); // Estado para la categoria seleccionada

  useEffect(() => {
    const fetchTasks = async () => {
      const tasksData = await TaskService.getAllTasks();
      setTasks(tasksData);
    };

    fetchTasks();
  }, []);

  // Filtra las tareas por la categoria seleccionada
  const filteredTasks = selectedCategory
    ? tasks.filter(task => task.estado.toUpperCase() === selectedCategory.toUpperCase())
    : tasks;

  return (
    <div className="container mt-5">
      <CategoriasSelector onSelectCategory={setSelectedCategory} /> {/* Pasa la funcion para manejar la seleccion de categoria */}
      <CategoriasTareas tasks={filteredTasks} /> {/* Pasa las tareas filtradas al componente CategoriasTareas */}
    </div>
  );
};

export default Categorias;
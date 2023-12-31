import { useEffect, useState } from 'react';
import CarouselInicio from '../components/Carousel/CarouselInicio';
import { TaskService } from '../Services/TaskService';
import CategoriasSelector from '../components/CategoriaSelector/CategoriaSelect';
import CategoriasTareas from '../components/CategoriaTarea/CategoriaTarea';
import { Task } from '../types/Task';


const LandingPage = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]); // Estado para almacenar tareas filtradas
  const [selectedCategory, setSelectedCategory] = useState<string>(''); // Estado para la categoría seleccionada
  

  useEffect(() => {
    const fetchTasks = async () => {
      const tasksData = await TaskService.getAllTasks();
      setTasks(tasksData);
    };

    fetchTasks();
  }, []);

  // Efecto para filtrar las tareas cuando se selecciona una categoría
  useEffect(() => {
    if (selectedCategory) {
      const filtered = tasks.filter(task => task.estado.toUpperCase() === selectedCategory.toUpperCase());
      setFilteredTasks(filtered);
    } else {
      setFilteredTasks(tasks); // Si no hay categoría seleccionada, mostrar todas las tareas
    }
  }, [selectedCategory, tasks]);

  return (
    <>
      <CarouselInicio/>
      <CategoriasSelector onSelectCategory={setSelectedCategory} />
      <CategoriasTareas tasks={filteredTasks.length > 0 ? filteredTasks : tasks} />
    </>
  );
};

export default LandingPage;
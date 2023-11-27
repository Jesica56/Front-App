import { Route, Routes } from "react-router-dom"
import LandingPages from "../pages/LandingPages"
import DetalleTarea from "../components/DetalleTarea/DetalleTarea";




const AppRoutes: React.FC = () => {
  return (
    <Routes>
        < Route path="/" element={<LandingPages/>}/>
        < Route path="/detalle/:taskId" element={<DetalleTarea/>}/>
    </Routes>
  );
}

export default AppRoutes;

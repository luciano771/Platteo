import { useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button"; 

const Topbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleNew = () => {
    navigate(("/tasks/new"));
  };

  const handleMenu = () => {
    navigate(("/menus"));
  };


  return (
    <header className="bg-white px-4 py-3 flex justify-between items-center">
      <div>
        <h1 className="text-xl font-semibold">
          {(pathname === "/menus" || pathname.includes("tasks")) && "Mis Menús" }
          {pathname === "/" && "Dashboard"} 
          {pathname === "/qr" && "Mi Qr"}  
        </h1>
      </div>
      
      
      {/* Acciones específicas */}

      <div className="bg-white px-1  gap-2 flex flex-end items-center"> 
        {(pathname.includes("new") || pathname.includes("edit")) && (
          <Button handleMenu={handleMenu} texto="Volver" />
        )} 
        
        {(pathname === "/menus" || pathname.includes("tasks")) && (
          <Button handleMenu={handleNew} texto="Agregar" /> 
        )}
      </div>
         
    </header>

  );
};

export default Topbar;

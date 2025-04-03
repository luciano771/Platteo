import { useLocation, useNavigate } from "react-router-dom";

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
      <h1 className="text-xl font-semibold">
        {(pathname === "/menus" || pathname.includes("tasks")) && "Mis Menús" }
        {pathname === "/" && "Dashboard"} 
        {pathname === "/qr" && "Mi Qr"}  
      </h1>
      
      {/* Acciones específicas */}
      
    {(pathname.includes("new") || pathname.includes("edit")) && (
        <button          
            onClick={handleMenu}
            className="bg-gray-500 hover:bg-gray-400 text-white px-4 py-2 rounded font-bold text-base tracking-wide">
                <p className="text-sm" >Volver</p> 
        </button>
      )}


      {(pathname === "/menus" || pathname.includes("tasks")) && (
        <button          
            onClick={handleNew}
            className="bg-gray-500 hover:bg-gray-400 text-white px-4 py-2 rounded font-bold text-base tracking-wide">
                <p className="text-sm" >Agregar</p> 
        </button>
      )}
  
    </header>

  );
};

export default Topbar;

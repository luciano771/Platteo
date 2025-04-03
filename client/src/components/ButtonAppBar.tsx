
import React from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";

const ButtonAppBar: React.FC = () => {
  const navigate = useNavigate();
  const location =  useLocation()

  return (
    <nav className="flex items-center justify-between">
      <Link to="/">
        <h1 className="text-white font-bold text-4xl my-4">Tu carta</h1>
      </Link>

      {location.pathname === "/tasks/new" || location.pathname.includes('/tasks/') ? (
        <button 
          className="bg-yellow-400  text-black font-bold py-2 px-4 rounded-lg my-2 "
          onClick={() => navigate("/")}
        >
          Volver
        </button>
      ) : (
        <button
          className="bg-yellow-400  text-black font-bold py-2 px-4 rounded-lg my-2"
          onClick={() => navigate("/tasks/new")}
        >
          Añadir Menu
        </button>
      )}
    </nav>
  );
}
export default ButtonAppBar;
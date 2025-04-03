import { LayoutDashboard, List, QrCode } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => (
  
  <aside className="w-20 bg-white text-white p-4 flex flex-col gap-6 items-center"> 
    <div className="w-auto h-auto scale-150">
      <img src="logo2.png" alt="Logo"/>
    </div> 
    <NavLink to="/" className={({ isActive }) => isActive ? "text-yellow-500" : "text-gray-600"}>
      <LayoutDashboard  size={35} />
    </NavLink>
    <NavLink to="/menus" className={({ isActive }) => isActive ? "text-yellow-500" : "text-gray-600"}>
      <List size={35} />
    </NavLink>
    <NavLink to="/qr" className={({ isActive }) => isActive ? "text-yellow-500" : "text-gray-600"}>
      <QrCode size={35} />
    </NavLink>
  </aside>
);

export default Sidebar;

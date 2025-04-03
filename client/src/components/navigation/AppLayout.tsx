import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar vertical */}
      <Sidebar />

      {/* Área derecha: Topbar + contenido */}
      <div className="h-screen flex-1 flex flex-col">
        {/* Topbar horizontal */}
        <Topbar />

        {/* Contenido scrollable */}
        <main className="bg-white border border-gray-200 rounded-lg shadow-lg h-screen p-4 overflow-y-auto">
        {children}
        </main>

      </div>
    </div>
  );
};

export default AppLayout;

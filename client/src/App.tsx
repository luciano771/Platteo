import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/navigation/AppLayout";

import TaskForm from "./components/Menus/TaskForm";
import TasksList from "./components/Menus/TasksList";
import Dashboard from "./components/Dashboard/Dashboard";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route index path="/" element={<Dashboard />} />
          <Route index path="/menus" element={<TasksList />} />

          <Route path="/tasks/new" element={<TaskForm />} />
          <Route path="/tasks/:id/edit" element={<TaskForm />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
};

export default App;

import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import "./App.css";
import MainDashboard from "./pages/main-dashboard/MainDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainDashboard />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

import './App.css';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Search from './pages/search/Search';
import Home from './pages/home/Home';
import Recipe from './pages/recipe/Recipe';
import Create from './pages/create/Create';
import Navbar from './components/Navbar';
import { useTheme } from './hooks/useTheme';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div><Home /></div>,
  },
  {
    path: "/home",
    element: <div><Home /></div>,
  },
  {
    path: "/recipes/:id",
    element: <div><Recipe /></div>,
  },
  {
    path: "/create",
    element: <div><Create/></div>,
  },
  {
    path: "/search",
    element: <div><Search/></div>,
  },
  
]);


function App() {
   const{ mode } = useTheme()
  return (
    <div className={`App ${mode}`}>
        <RouterProvider router = {router} />
    </div>
  );
}

export default App;

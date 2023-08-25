import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import routes from './Routes/routes';

function App() {
  return (
    <RouterProvider router={routes} />
  );
}

export default App;

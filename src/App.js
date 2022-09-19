import "./App.scss";
import { Outlet } from "react-router-dom";

//components
import Notifications from "./components/Notifications/Notifications";

function App() {
  return (
    <div className="App">
      <Notifications />
      <Outlet />
    </div>
  );
}

export default App;

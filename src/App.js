import { Outlet } from "react-router-dom";

import Header from "./components/header/Header";

function App() {
  return (
    <div>
      <div>
        <Header/>
      </div>
      <Outlet />
    </div>
  );
}

export default App;

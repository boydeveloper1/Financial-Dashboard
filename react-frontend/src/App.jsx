import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./pages/Dashboard/dashboard";
import MainNavigation from "./components/Navigation/Main-Navigation/main-navigation.components";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainNavigation />}>
        <Route index element={<Dashboard />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;

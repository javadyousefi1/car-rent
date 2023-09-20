import { Route, Routes } from "react-router-dom";
import Layout from "./layout/layout";
import HomePage from "./pages/homePage";
import Register from "./pages/Register";
import Login from "./pages/login";
import Cars from "./pages/cars";

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cars" element={<Cars />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;

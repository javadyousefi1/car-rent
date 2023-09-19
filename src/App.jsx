import { Route, Routes } from "react-router-dom";
import Layout from "./layout/layout";
import HomePage from "./pages/homePage";
import Register from "./pages/Register";
import Login from "./pages/login";

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;

import { Route, Routes } from "react-router-dom";
import Layout from "./layout/layout";
import HomePage from "./pages/homePage";
import Register from "./pages/Register";
import Login from "./pages/login";
import Cars from "./pages/cars";
import { Provider } from "react-redux";
import store from "./components/redux/store";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cars" element={<Cars />} />
          </Routes>
        </Layout>
      </Provider>
    </>
  );
};

export default App;

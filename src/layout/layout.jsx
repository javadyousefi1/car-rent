import { Toaster } from "react-hot-toast";
import Footer from "../components/footer";
import Header from "../components/header";

const Layout = ({ children }) => {
  return (
    <>
    <div><Toaster/></div>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;

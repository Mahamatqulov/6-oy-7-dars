import { Outlet } from "react-router-dom";
import { Footer, Navbar, ColorContainer } from "../components";

function MainLayout() {
  return (
    <>
      <Navbar />
      <ColorContainer />
      <main className="align-elements w-full">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;

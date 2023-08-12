import { Outlet } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";

export const Layout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="px-[8%]">
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

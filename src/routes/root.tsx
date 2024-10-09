import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

export default function Root() {
  return (
    <div className="min-h-svh max-h-svh flex flex-col bg-slate-200">
      <main className="p-4 flex flex-col relative grow overflow-y-scroll">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

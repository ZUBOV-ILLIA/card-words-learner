import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

export default function Root() {
  return (
    <div className="min-h-screen max-h-screen flex flex-col bg-[url('/main-bg.jpg')] bg-cover">
      <main className="p-4 grow relative overflow-y-scroll">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

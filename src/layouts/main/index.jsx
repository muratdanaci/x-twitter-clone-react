import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import RightBar from "./rightbar";

export default function MainLayout() {
  return (
    <div className="w-[1325px] mx-auto flex">
      <Sidebar />
      <main className="w-[1050px] flex-1 flex justify-between">
        <main className="flex-1 max-w-[600px] border-x border-[#38444d]">
          <Outlet />
        </main>
        <RightBar />
      </main>
    </div>
  );
}

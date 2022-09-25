import { Outlet } from "react-router-dom";
export default function AuthLayout() {
  return (
    <div className=" flex-wrap overflow-auto h-full w-full flex items-center gap-x-8 justify-center">
      <Outlet />
    </div>
  );
}

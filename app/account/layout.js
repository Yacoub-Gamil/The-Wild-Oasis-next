import SideNavigation from "@/app/_components/SideNavigation";

function Layout({ children }) {
  return (
    <div className=" grid grid-cols-[16rem_1fr] h-full gap-15">
      <SideNavigation />
      <div className=" p-1">{children}</div>
    </div>
  );
}

export default Layout;

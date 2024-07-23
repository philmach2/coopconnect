import Navbar from "@/components/Navbar";
import SideNav from "@/components/SideNav";
import AuthCheck from "@/components/AuthCheck";

export default function DashboardLayout({ children }) {
  return (
    <AuthCheck>
      <Navbar />
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-64 mt-12">
          <SideNav />
        </div>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12 mt-4">
          {children}
        </div>
      </div>
    </AuthCheck>
  );
}

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SideNav from "@/components/SideNav";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-64 mt-12">
          <SideNav />
        </div>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12 mt-4">
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DashboardLayout;

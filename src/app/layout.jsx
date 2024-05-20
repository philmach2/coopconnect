import "@/assets/styles/globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "78 Charles | West Village Cooperative",
  description: "Property at 78 Charles St",
  keywords: "78, Charles, 78 Charles, west village, coop, property",
};

const LandingLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  );
};

export default LandingLayout;

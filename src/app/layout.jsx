import "@/assets/styles/globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "78 Charles | West Village Cooperative",
  description: "West Village Cooperative at 78 Charles St",
  keywords:
    "78 charles, west village, coop, property, nyc, new york, new york city",
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

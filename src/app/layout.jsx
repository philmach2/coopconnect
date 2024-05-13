import "@/assets/styles/globals.css";

export const metadata = {
  title: "78 Charles | West Village Cooperative",
  description: "Property at 78 Charles St",
  keywords: "78, Charles, 78 Charles, west village, coop, property",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;

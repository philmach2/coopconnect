import Navbar from "@/components/Navbar";
import Link from "next/link";
// import About from "@/components/About";
// import Footer from "@/components/Footer";
// import HeroImage from "@/components/HeroImage";

// const LandingPage = () => {
//   return (
//     <>
//       <Navbar />
//       <HeroImage />
//       <About />
//       <Footer />
//     </>
//   );
// };

// export default LandingPage;

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100">
        <main>
          <div className="relative">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/api/placeholder/1200/600')" }}
            />
            <div className="absolute inset-0 bg-black opacity-50" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
              <h2 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
                Simplifying Cooperative Living in NYC
              </h2>
              <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
                Empower your co-op with user-friendly tools for communication,
                finance, and governance.
              </p>
              <div className="mt-10 flex justify-center">
                <Link
                  href="/dashboard"
                  className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="bg-gray-50 rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Communication & Organization
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Streamline operations with intuitive messaging and document
                    sharing.
                  </p>
                  <Link
                    href="/dashboard"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Stay Connected
                  </Link>
                </div>
                <div className="bg-gray-50 rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Secure Payments
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Process fees and assessments easily through our secure
                    portal.
                  </p>
                  <Link
                    href="/dashboard"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Simplify Finances
                  </Link>
                </div>
                <div className="bg-gray-50 rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Board Member Tools
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Enhance decision-making and governance with specialized
                    tools.
                  </p>
                  <Link
                    href="/dashboard"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Empower Your Board
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
                About CoopConnect NYC
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                CoopConnect NYC is your all-in-one solution for simplifying
                cooperative living in New York City. Our secure platform
                streamlines day-to-day operations, enhances transparency, and
                fosters community engagement.
              </p>
              <p className="text-xl text-gray-600 mb-6">
                Whether you're a self-managed cooperative, a smaller managed
                building, or a board looking for simplified solutions,
                CoopConnect NYC adapts to your unique needs. We make co-op
                living smoother and more efficient for buildings that may not
                have extensive management resources.
              </p>
              <div className="mt-8">
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Learn More About Us →
                </a>
              </div>
            </div>
          </div>
        </main>

        <footer className="bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <p className="text-center text-gray-400">
              &copy; 2024 CoopConnect NYC. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default LandingPage;

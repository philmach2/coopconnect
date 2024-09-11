import Link from "next/link";
import { FaExclamationCircle } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <section className="bg-neutral-50 min-h-screen flex-grow">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-24 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <div className="flex justify-center">
            <FaExclamationCircle className="fas fa-exclamation-triangle fa-5x text-8xl text-sky-500" />
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-bold mt-4 mb-2">Page Not Found</h1>
            <p className="text-stone-500 text-xl mb-10">
              The page you are looking for does not exist.
            </p>
            <Link
              href="/"
              className="bg-sky-500 hover:bg-sky-400 text-white font-bold py-4 px-6 rounded"
            >
              Go Home
            </Link>
          </div>
        </div>
      </div>
      <div className="flex-grow"></div>
    </section>
  );
};

export default NotFoundPage;

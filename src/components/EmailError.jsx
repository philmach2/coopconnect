"use client";
import Link from "next/link";
import { FaBan } from "react-icons/fa";

const EmailError = () => {
  return (
    <section className="bg-neutral-50 min-h-screen flex-grow">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-24 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <div className="flex justify-center">
            <FaBan className="fas fa-5x text-8xl text-sky-500" />
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-bold mt-4 mb-2">Access Denied</h1>
            <p className="text-stone-500 text-xl mb-10">
              It seems you either entered an incorrect email address or do not
              have the necessary permissions to access this page. If you are a
              shareholder, please contact the board for further assistance.
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                href="/"
                className="bg-black hover:opacity-80 text-white font-bold py-4 px-6 rounded"
              >
                Go Home
              </Link>
              <Link
                href="/api/auth/signin"
                className="bg-sky-500 hover:bg-sky-400 text-white font-bold py-4 px-6 rounded"
              >
                Try Again
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-grow"></div>
    </section>
  );
};

export default EmailError;

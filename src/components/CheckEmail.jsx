"use client";

import { FaEnvelope } from "react-icons/fa";

const CheckEmail = () => {
  return (
    <section className="bg-neutral-50 min-h-screen flex-grow">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-24 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <div className="flex justify-center">
            <FaEnvelope className="fas fa-envelope fa-5x text-8xl text-sky-500" />
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-bold mt-4 mb-2">Check Your Email</h1>
            <p className="text-stone-500 text-xl mb-10">
              We've sent a verification link to your email address. Please check
              your inbox and click the link to continue.
            </p>
          </div>
        </div>
      </div>
      <div className="flex-grow"></div>
    </section>
  );
};

export default CheckEmail;

"use client";

import React from "react";
import PDFPreview from "@/components/PDFPreview";

const LeasePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <h1 className="text-2xl font-bold p-4">Proprietary Lease</h1>
      <div className="flex-grow">
        <PDFPreview documentType="lease" />
      </div>
    </div>
  );
};

export default LeasePage;

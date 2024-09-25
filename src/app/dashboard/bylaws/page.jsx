"use client";

import React from "react";
import PDFPreview from "@/components/PDFPreview";

const BylawsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <h1 className="text-2xl font-bold p-4">By Laws</h1>
      <div className="flex-grow">
        <PDFPreview documentType="bylaws" />
      </div>
    </div>
  );
};

export default BylawsPage;

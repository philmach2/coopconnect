"use client";

import React from "react";
import PDFPreview from "@/components/PDFPreview";

const HouseRulesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <h1 className="text-2xl font-bold p-4">House Rules Document</h1>
      <div className="flex-grow">
        <PDFPreview documentType="houserules" />
      </div>
    </div>
  );
};

export default HouseRulesPage;

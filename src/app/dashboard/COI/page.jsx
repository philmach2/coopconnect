"use client";

import PDFPreview from "@/components/PDFPreview";

const COIPage = () => {
  return (
    <div className="min-h-screen flex flex-col p-4">
      <h1 className="text-2xl font-bold mb-6">
        Certificate of Insurance Example
      </h1>

      <div className="mb-8">
        <div className="h-[600px]">
          <PDFPreview documentType="coiexample" />
        </div>
      </div>
    </div>
  );
};

export default COIPage;

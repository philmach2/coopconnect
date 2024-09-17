"use client";

import PDFPreview from "@/components/PDFPreview";

const AlterationsAgreementPage = () => {
  return (
    <div className="min-h-screen flex flex-col p-4">
      <h1 className="text-2xl font-bold mb-6">
        Alterations Agreement Document
      </h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Current Agreement</h2>
        <div className="h-[600px]">
          <PDFPreview documentType="alterationagreement" />
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Example Agreement</h2>
        <div className="h-[600px]">
          <PDFPreview documentType="alterationagreement" />
        </div>
      </div>
    </div>
  );
};

export default AlterationsAgreementPage;

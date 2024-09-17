import React, { useState, useEffect } from "react";
import LoadingPage from "@/app/loading";

const PDFPreview = ({ documentType }) => {
  const [pdfUrl, setPdfUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPDF = async () => {
      try {
        console.log(`Fetching document: ${documentType}`);
        const response = await fetch(`/api/documents?type=${documentType}`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const blob = await response.blob();
        console.log(`Received blob size: ${blob.size} bytes`);

        const url = URL.createObjectURL(blob);
        setPdfUrl(url);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching PDF:", err);
        setError(`Could not load PDF: ${err.message}`);
        setLoading(false);
      }
    };

    fetchPDF();

    return () => {
      if (pdfUrl) {
        URL.revokeObjectURL(pdfUrl);
      }
    };
  }, [documentType]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Loading Document
        </h2>
        <p className="mb-8 text-lg text-center text-gray-600">
          This is a larger document. It's loading now and may take a moment.
          Please wait.
        </p>
        <LoadingPage loading={true} />
      </div>
    );
  }

  if (error)
    return <div className="text-red-500 text-center mt-4">{error}</div>;

  return (
    <iframe
      src={pdfUrl}
      width="100%"
      height="700px"
      title={`${documentType} Preview`}
      frameBorder="0"
    ></iframe>
  );
};

export default PDFPreview;

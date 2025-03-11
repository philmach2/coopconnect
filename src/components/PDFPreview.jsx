// components/PDFPreview.js
"use client";

import React, { useState, useEffect } from "react";

const PDFPreview = ({ documentType }) => {
  const [pdfUrl, setPdfUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // For demo purposes, you can use this fallback URL when working locally
  const fallbackUrl = `/documents/${documentType}.pdf`;

  useEffect(() => {
    const fetchPDF = async () => {
      try {
        console.log(`Fetching document: ${documentType}`);

        // First try the API route
        try {
          const response = await fetch(`/api/documents?type=${documentType}`);

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const blob = await response.blob();
          console.log(`Received blob size: ${blob.size} bytes`);

          const url = URL.createObjectURL(blob);
          setPdfUrl(url);
          setLoading(false);
        } catch (apiError) {
          console.warn(
            "API route failed, falling back to direct file access:",
            apiError
          );
          // If API fails, fall back to direct file path
          setPdfUrl(fallbackUrl);
          setLoading(false);
        }
      } catch (err) {
        console.error("Error fetching PDF:", err);
        setError(`Could not load PDF: ${err.message}`);
        setLoading(false);
      }
    };

    fetchPDF();

    return () => {
      if (pdfUrl && pdfUrl.startsWith("blob:")) {
        URL.revokeObjectURL(pdfUrl);
      }
    };
  }, [documentType, fallbackUrl]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center p-8">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-lg text-center text-gray-600">
          Loading document...
        </p>
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
      className="border border-gray-200 rounded"
      frameBorder="0"
    ></iframe>
  );
};

export default PDFPreview;

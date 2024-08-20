import React, { useState, useEffect } from "react";

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

        const contentType = response.headers.get("content-type");
        console.log(`Received content type: ${contentType}`);

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

  if (loading) return <div>Loading PDF...</div>;
  if (error) return <div>{error}</div>;

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

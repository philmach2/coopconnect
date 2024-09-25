"use client";

import React from "react";
import PDFPreview from "@/components/PDFPreview";

const MeetingMinutesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <h1 className="text-2xl font-bold p-4">Meeting Minutes</h1>
      <div className="flex-grow">
        <PDFPreview documentType="meetingminutes" />
      </div>
    </div>
  );
};

export default MeetingMinutesPage;

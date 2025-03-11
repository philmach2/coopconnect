// app/api/documents/route.js
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const documentType = searchParams.get("type");

  // Map document types to file paths
  const documentMap = {
    bylaws: "public/docs/bylaws.pdf",
    alterationagreement: "public/docs/alterationagreement.pdf",
    coiexample: "public/docs/coiexample.pdf",
    houserules: "public/docs/houserules.pdf",
    // Add more document types as needed
  };

  const filePath = documentMap[documentType];

  if (!filePath) {
    return new NextResponse("Document not found", { status: 404 });
  }

  try {
    const fullPath = path.join(process.cwd(), filePath);
    const fileBuffer = fs.readFileSync(fullPath);

    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `inline; filename="${documentType}.pdf"`,
      },
    });
  } catch (error) {
    console.error("Error reading file:", error);
    return new NextResponse("Error reading document", { status: 500 });
  }
}

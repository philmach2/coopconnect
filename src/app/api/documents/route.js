import { NextResponse } from "next/server";
import clientPromise from "@/config/database";
import { GridFSBucket } from "mongodb";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const documentType = searchParams.get("type");

  console.log(`Received request for document type: ${documentType}`);

  if (!documentType) {
    console.log("No document type provided");
    return NextResponse.json(
      { error: "No document type provided" },
      { status: 400 }
    );
  }

  try {
    const client = await clientPromise;
    const db = client.db();
    const documentsCollection = db.collection("documents");

    // First, try to find the document in the regular collection
    const document = await documentsCollection.findOne({ type: documentType });

    if (document && document.content) {
      console.log(`Found ${documentType} in regular collection`);
      const response = new NextResponse(document.content.buffer);
      response.headers.set("Content-Type", "application/pdf");
      return response;
    }

    console.log(
      `${documentType} not found in regular collection, checking GridFS`
    );

    // If not found in regular collection, try GridFS
    const bucket = new GridFSBucket(db, {
      bucketName: "documents",
    });

    const files = await bucket.find({ filename: documentType }).toArray();
    if (files.length === 0) {
      console.log(`${documentType} not found in GridFS`);
      return NextResponse.json(
        { error: "Document not found" },
        { status: 404 }
      );
    }

    console.log(`Found ${documentType} in GridFS, preparing download stream`);
    const downloadStream = bucket.openDownloadStreamByName(documentType);

    return new NextResponse(downloadStream, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `inline; filename="${documentType}.pdf"`,
      },
    });
  } catch (error) {
    console.error(`Error retrieving ${documentType}:`, error);
    return NextResponse.json(
      { error: "Failed to retrieve document" },
      { status: 500 }
    );
  }
}

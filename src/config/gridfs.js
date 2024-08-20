import mongoose from "mongoose";
import { GridFSBucket } from "mongodb";
import clientPromise from "./database";

let gfs;

const initializeGridFS = async () => {
  try {
    const client = await clientPromise;
    const db = client.db();
    gfs = new GridFSBucket(db, {
      bucketName: "uploads",
    });
  } catch (error) {
    console.error("Failed to initialize GridFS:", error);
  }
};

initializeGridFS();

export const uploadFile = (file) => {
  return new Promise((resolve, reject) => {
    const writeStream = gfs.openUploadStream(file.originalname, {
      contentType: file.mimetype,
    });

    writeStream.write(file.buffer);
    writeStream.end();

    writeStream.on("finish", () => {
      resolve(writeStream.id);
    });

    writeStream.on("error", reject);
  });
};

export const getFileStream = (fileId) => {
  return gfs.openDownloadStream(new mongoose.Types.ObjectId(fileId));
};

export const deleteFile = (fileId) => {
  return gfs.delete(new mongoose.Types.ObjectId(fileId));
};

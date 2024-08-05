import clientPromise from "@/config/database";

export const GET = async (request) => {
  try {
    const client = await clientPromise;
    const db = client.db();

    // You can now use `db` to interact with your database
    // For example:
    // const documents = await db.collection('documents').find({}).toArray();

    return new Response(
      JSON.stringify(
        { message: "Hello World" },
        { status: 200, headers: { "Content Type": "application/json" } }
      )
    );
  } catch (error) {
    console.error(error);
    return new Response("Something Went Wrong", { status: 500 });
  }
};

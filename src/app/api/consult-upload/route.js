import { handleUpload } from "@vercel/blob/client";

// Issues short-lived tokens so the consultation form can upload a client's
// photos straight to Vercel Blob from the browser; the resulting links are
// then included in the WhatsApp message. Needs a Blob store connected to the
// Vercel project (which sets BLOB_READ_WRITE_TOKEN). Without it the form
// falls back to asking the client to attach photos in WhatsApp themselves.
export async function POST(request) {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return Response.json({ error: "Photo uploads are not configured." }, { status: 503 });
  }

  try {
    const body = await request.json();
    const result = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async (pathname) => {
        if (!pathname.startsWith("consultations/")) throw new Error("Invalid upload path.");
        return {
          allowedContentTypes: ["image/jpeg", "image/png", "image/webp", "image/heic", "image/heif"],
          maximumSizeInBytes: 15 * 1024 * 1024,
          addRandomSuffix: true,
        };
      },
    });
    return Response.json(result);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 400 });
  }
}

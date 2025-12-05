export const runtime = "nodejs";

export async function POST() {
  return Response.json(
    {
      error:
        "This endpoint has been deprecated. Use /api/gemini-feedback instead.",
    },
    { status: 410 }
  );
}

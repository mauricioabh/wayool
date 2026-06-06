import { get } from "@vercel/blob";

export const dynamic = "force-dynamic";

const APK_PATHNAME = "apks/luz-parroquial/app-release.apk";
const DOWNLOAD_FILENAME = "luz-parroquial.apk";

export async function GET() {
  const result = await get(APK_PATHNAME, { access: "private" });

  if (!result || result.statusCode !== 200 || !result.stream) {
    return new Response("APK not found", { status: 404 });
  }

  return new Response(result.stream, {
    headers: {
      "Content-Type":
        result.blob.contentType ?? "application/vnd.android.package-archive",
      "Content-Disposition": `attachment; filename="${DOWNLOAD_FILENAME}"`,
      "Content-Length": String(result.blob.size),
      "Cache-Control": result.blob.cacheControl ?? "public, max-age=3600",
    },
  });
}

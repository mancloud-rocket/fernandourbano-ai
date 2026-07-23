import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import type { Post } from "@/content/posts";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

/**
 * Brand OG card for a post: ink background, teal editorial rule, the site
 * monogram, kicker + title + subtitle, and the fernandourbano.ai signature.
 * Rendered by next/og (Satori) so every container carries display:flex.
 */
export async function renderPostOg(post: Post) {
  let logoSrc = "";
  try {
    const logo = await readFile(join(process.cwd(), "public/logo/logo-iso.png"));
    logoSrc = `data:image/png;base64,${logo.toString("base64")}`;
  } catch {
    /* no logo available; card still renders */
  }

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0A0A0B",
          borderLeft: "14px solid #3DEDE8",
          padding: "64px 72px",
          color: "#F4EDE2",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {logoSrc ? (
            <img src={logoSrc} width={56} height={56} alt="" />
          ) : (
            <div style={{ display: "flex", fontSize: 30, fontWeight: 700, color: "#F4EDE2" }}>FU</div>
          )}
          <div
            style={{
              display: "flex",
              fontSize: 22,
              letterSpacing: 4,
              color: "#7C766B",
              textTransform: "uppercase",
            }}
          >
            fernandourbano.ai
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 24,
              letterSpacing: 8,
              color: "#3DEDE8",
              textTransform: "uppercase",
            }}
          >
            {post.kicker}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 22,
              fontSize: 60,
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: -1,
              maxWidth: 1000,
            }}
          >
            {post.title}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 22,
              fontSize: 34,
              fontStyle: "italic",
              color: "#C5BEB1",
            }}
          >
            {post.subtitle}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", fontSize: 24, color: "#F4EDE2" }}>Fernando Urbano</div>
          <div
            style={{
              display: "flex",
              fontSize: 20,
              letterSpacing: 3,
              color: "#7C766B",
              textTransform: "uppercase",
            }}
          >
            IA sin bluff
          </div>
        </div>
      </div>
    ),
    { ...OG_SIZE },
  );
}

const EMBED_HOSTS = new Set([
  "www.youtube.com",
  "youtube.com",
  "www.youtube-nocookie.com",
  "youtube-nocookie.com",
  "player.vimeo.com",
]);

/**
 * Returns a safe embed URL for YouTube/Vimeo only, or null if unsupported.
 */
export function toSafeEmbedUrl(url: string): string | null {
  let parsed: URL;
  try {
    parsed = new URL(url.trim());
  } catch {
    return null;
  }

  if (parsed.protocol !== "https:") return null;

  const host = parsed.hostname.toLowerCase();

  if (host === "youtu.be") {
    const id = parsed.pathname.slice(1).split("/")[0];
    return id && /^[\w-]{11}$/.test(id)
      ? `https://www.youtube-nocookie.com/embed/${id}`
      : null;
  }

  if (host === "www.youtube.com" || host === "youtube.com") {
    const id = parsed.searchParams.get("v");
    return id && /^[\w-]{11}$/.test(id)
      ? `https://www.youtube-nocookie.com/embed/${id}`
      : null;
  }

  if (host === "www.youtube-nocookie.com" || host === "youtube-nocookie.com") {
    const match = parsed.pathname.match(/^\/embed\/([\w-]{11})$/);
    return match ? `https://www.youtube-nocookie.com/embed/${match[1]}` : null;
  }

  if (host === "vimeo.com" || host === "www.vimeo.com") {
    const id = parsed.pathname.split("/").filter(Boolean)[0];
    return id && /^\d+$/.test(id)
      ? `https://player.vimeo.com/video/${id}`
      : null;
  }

  if (host === "player.vimeo.com") {
    const match = parsed.pathname.match(/^\/video\/(\d+)$/);
    return match ? `https://player.vimeo.com/video/${match[1]}` : null;
  }

  if (EMBED_HOSTS.has(host)) {
    return parsed.href;
  }

  return null;
}

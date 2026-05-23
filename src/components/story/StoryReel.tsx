import type { StoryChapter } from "@/content/types";
import { StoryChapterBlock } from "./StoryChapter";
import { ReelPerforation } from "./ReelPerforation";

type Props = { chapters: StoryChapter[] };

export function StoryReel({ chapters }: Props) {
  return (
    <div className="space-y-0">
      {chapters.map((ch, i) => (
        <div key={ch.id}>
          <StoryChapterBlock chapter={ch} />
          {i < chapters.length - 1 ? <ReelPerforation /> : null}
        </div>
      ))}
    </div>
  );
}

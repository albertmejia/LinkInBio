import React from "react";
import DownloadCSS from "../css/Downloads.module.css";

const mixes = [
  {
    title: "open tabs [002] - house/ukg + groove adjacent",
    previewEmbedUrl:
      '<iframe title="open tabs [002] - house/ukg + groove adjacent SoundCloud player" width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay; encrypted-media" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2412102702&color=%235cbf6f&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/summers-over" title="summers over" target="_blank" style="color: #cccccc; text-decoration: none;">summers over</a> · <a href="https://soundcloud.com/summers-over/open-tabs-002-house-ukg-groove" title="open tabs [002] - house/ukg + groove adjacent" target="_blank" style="color: #cccccc; text-decoration: none;">open tabs [002] - house/ukg + groove adjacent</a></div>',
  },
  {
    title: "open tabs [001] - 80's funk/r&b + groove adjacent",
    previewEmbedUrl:
      '<iframe title="open tabs [001] - 80&#x27;s funk/r&amp;b + groove adjacent SoundCloud player" width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay; encrypted-media" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2180220503&color=%235cbf6f&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/summers-over" title="summers over" target="_blank" style="color: #cccccc; text-decoration: none;">summers over</a> · <a href="https://soundcloud.com/summers-over/open-tabs-001" title="open tabs [001] - 80&#x27;s funk/r&amp;b + groove adjacent" target="_blank" style="color: #cccccc; text-decoration: none;">open tabs [001] - 80&#x27;s funk/r&amp;b + groove adjacent</a></div>',
  },
];

function Mixes() {
  return (
    <main>
      <div className={DownloadCSS.detailHeader}>
        <h2>Mixes</h2>
      </div>
      {mixes.map((mix) => (
        <section key={mix.title} aria-label={mix.title}>
          <div
            className={`${DownloadCSS.previewWrapper} ${DownloadCSS.mixPreviewWrapper}`}
            dangerouslySetInnerHTML={{ __html: mix.previewEmbedUrl }}
          />
        </section>
      ))}
    </main>
  );
}

export default Mixes;
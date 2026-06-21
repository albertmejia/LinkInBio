import React from "react";
import { Link, useParams } from "react-router-dom";
import { downloadsData } from "../linksData";
import HomeCSS from "../css/Home.module.css";
import DownloadCSS from "../css/Downloads.module.css";

function DownloadDetail() {
  const { slug } = useParams();
  const item = downloadsData.find((download) => download.slug === slug);

  if (!item) {
    return (
      <main>
        <div className={DownloadCSS.detailHeader}>
          <h2>Download not found</h2>
          <p>Check the downloads list and try again.</p>
          <Link to="/downloads" className={`${HomeCSS.linkInline} ${DownloadCSS.backLink}`}>
            Back to downloads
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main>
      <div className={DownloadCSS.detailHeader}>
        <h2>{item.title}</h2>
      </div>

      {item.previewEmbedUrl ? (
        item.previewEmbedUrl.trim().startsWith("<iframe") || item.previewEmbedUrl.includes("<iframe") ? (
          <div
            className={DownloadCSS.previewWrapper}
            dangerouslySetInnerHTML={{ __html: item.previewEmbedUrl }}
          />
        ) : (
          <div className={DownloadCSS.previewWrapper}>
            <iframe
              className={DownloadCSS.previewFrame}
              title={`${item.title} preview`}
              src={item.previewEmbedUrl}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        )
      ) : (
        <div className={DownloadCSS.previewMissing}>
          <p>No preview has been added yet for this download.</p>
        </div>
      )}

      <div className={DownloadCSS.ctaBlock}>
        <a
          href={item.url}
          download
          className={DownloadCSS.downloadButton}
          onClick={() => {
            if (typeof window !== "undefined" && typeof window.gtag === "function") {
              window.gtag("event", "download_button_click", {
                event_category: "downloads",
                event_label: item.slug,
                download_slug: item.slug,
                download_title: item.title,
              });
            }
          }}
        >
          DOWNLOAD NOW
        </a>
      </div>

      <div className={DownloadCSS.downloadNote}>
        <p>
          This one's on the house. No download gates.
        </p>
        <p>
          If you enjoy the music, consider a follow, share, save, or repost. Every bit of support goes a long way. Thanks for listening. 🤝
        </p>
      </div>

      <div className={DownloadCSS.backRow}>
        <Link to="/downloads" className={`${HomeCSS.linkInline} ${DownloadCSS.backLink}`}>
          ← Back to all downloads
        </Link>
      </div>
    </main>
  );
}

export default DownloadDetail;

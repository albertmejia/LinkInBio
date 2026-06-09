import React from "react";
import { freeDownloadsData, linksData } from "../linksData";
import HomeCSS from "../css/Home.module.css";
import DownloadCSS from "../css/FreeDownloads.module.css";

function FreeDownloads() {
  const groupedDownloads = [
    {
      group: "DLs",
      items: freeDownloadsData,
    },
  ];

  return (
    <main>
      <div className={HomeCSS.yearList}>
        {groupedDownloads.map((groupObj) => (
          <div key={groupObj.group}>
            {groupObj.items.map((item, idx) => (
              <div className={`${HomeCSS.yearRow} ${DownloadCSS.downloadsYearRow}`} key={`${groupObj.group}-${idx}`}>
                <div className={HomeCSS.yearLabel}>{idx === 0 ? groupObj.group : ""}</div>
                <div className={HomeCSS.projectItem}>
                  <a href={item.url} className={HomeCSS.linkInline} target="_blank" rel="noopener noreferrer">
                    {item.title}
                  </a>
                </div>
                <div className={HomeCSS.projectLinkIcon}>
                  <a href={item.url} className={HomeCSS.linkInline} target="_blank" rel="noopener noreferrer">
                    ↗
                  </a>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}

export default FreeDownloads;

import React from "react";
import { linksData, styleData } from "../linksData";
import HomeCSS from "../css/Home.module.css";

function Home() {
  return (
    <main>
      <div className={HomeCSS.pageIntro}>
        {linksData.name !== null ? (
          <h2 style={{ color: styleData.NameColor || "#f5f5f5" }}>
            {linksData.name}
          </h2>
        ) : null}
        {linksData.designation !== null ? (
          <h3 style={{ color: styleData.DesignationColor || "#e5e5e5" }}>
            {linksData.designation}
          </h3>
        ) : null}
      </div>
      {/* grouped links by category (uses `group` on each link object) */}
      <div className={HomeCSS.linkList}>
        {(() => {
          const grouped = linksData.links.reduce((acc, l) => {
            const key = l.group || "Other";
            if (!acc[key]) acc[key] = [];
            acc[key].push(l);
            return acc;
          }, {});

          return Object.keys(grouped).map((group) => (
            <div key={group}>
              {grouped[group].map((item, idx) => {
                const isExternal = !item.linkUrl.startsWith("/") && !item.linkUrl.startsWith("#");
                return (
                  <div className={HomeCSS.yearRow} key={`${group}-${idx}`}>
                    <div className={HomeCSS.yearLabel}>{idx === 0 ? group : ""}</div>
                    <div className={`${HomeCSS.projectItem} ${item.muted ? HomeCSS.muted : ""}`}>
                      <a
                        href={item.linkUrl}
                        className={HomeCSS.linkInline}
                        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      >
                        {item.linkText}
                      </a>
                    </div>
                    <div className={HomeCSS.projectLinkIcon}>
                      <a
                        href={item.linkUrl}
                        className={HomeCSS.linkInline}
                        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      >
                        ↗&#xFE0E;
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          ));
        })()}
      </div>
    </main>
  );
}

export default Home;

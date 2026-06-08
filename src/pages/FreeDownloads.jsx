import React from "react";
import { freeDownloadsData } from "../linksData";
import ProfileImage from "../components/ProfileImage";
import FreeDownloadsCSS from "../css/FreeDownloads.module.css";

function FreeDownloads() {
  return (
    <div>
      <main>
        <ProfileImage linkToHome={true} />
        <h1>Free Downloads</h1>
        <ul className={FreeDownloadsCSS.downloadsList}>
          {freeDownloadsData.map((download, index) => (
            <li key={index}>
              <a href={download.url} target="_blank" rel="noopener noreferrer">
                {download.title}
              </a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default FreeDownloads;

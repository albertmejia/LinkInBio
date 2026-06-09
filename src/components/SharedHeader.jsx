import React from "react";
import { Link } from "react-router-dom";
import { linksData, styleData } from "../linksData";
import HomeCSS from "../css/Home.module.css";

function SharedHeader() {
  return (
    <header className={HomeCSS.homeHeader}>
      <Link to="/" className={HomeCSS.linkInline} style={{ display: "inline-block" }}>
        {linksData.wordmark && linksData.wordmark !== "Please Provide Profile Image" ? (
          <img src={linksData.wordmark} alt={linksData.logo || "logo"} className={HomeCSS.wordmark} />
        ) : linksData.logo ? (
          <h1
            style={{
              color: styleData.LogoColor || "#f5f5f5",
              fontSize: "1rem",
              fontWeight: 700,
              margin: 0,
              marginBottom: "1rem",
            }}
          >
            {linksData.logo}
          </h1>
        ) : null}
      </Link>
    </header>
  );
}

export default SharedHeader;

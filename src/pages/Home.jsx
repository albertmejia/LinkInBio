import React from "react";
import { linksData, styleData } from "../linksData";
import Link from "../components/LinkComponent";
import ProfileImage from "../components/ProfileImage";
import HomeCSS from "../css/Home.module.css";

function Home() {
  return (
    <div>
      {/* <header>
        <h1 style={{ color: styleData.LogoColor || "#0A0A0A" }}>
          {linksData.logo}
        </h1>
      </header> */}
      <main>
        <ProfileImage />
        {linksData.name !== null ? <h2 style={{ color: styleData.NameColor || "#0A0A0A" }}>
          {linksData.name}
        </h2> : null}
        {linksData.designation !== null ? <h3 style={{ color: styleData.DesignationColor || "#0A0A0A" }}>
          {linksData.designation}
        </h3>: null}
        <div className={HomeCSS.linkContainer}>
          {linksData.links.map((link, index) => (
            <Link
              key={index}
              linkText={link.linkText}
              linkUrl={link.linkUrl}
              linkBtn={link.linkBtn}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Home;

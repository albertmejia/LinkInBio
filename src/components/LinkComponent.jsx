import React from "react";
import DarkArrow from "../assets/DarkArrow.svg";
import LightArrow from "../assets/LightArrow.svg";
import LinkStyle from "../css/LinkComponent.module.css";
import { styleData } from "../linksData";

function LinkComponent({
  linkText = "LINK",
  linkUrl = "#",
  linkBtn = " Outline",
}) {
  const isExternal = !linkUrl.startsWith("/") && !linkUrl.startsWith("#");
  return (
    <div>
      {linkBtn === "Outline" ? (
        <a
          href={linkUrl}
          className={LinkStyle.aBtn}
          {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          <button
            className={LinkStyle.btn}
            style={{
              backgroundColor:
                styleData.OutlineButtonStyle.buttonBackgroundColor ||
                "transparent",
              color: styleData.OutlineButtonStyle.buttonTextColor || "#f5f5f5",
              border: `1px solid ${
                styleData.OutlineButtonStyle.buttonBorderColor || "#f5f5f5"
              }`,
            }}
          >
            {linkText}
            <img src={DarkArrow} alt="Arrow" className={LinkStyle.arrowIcon} />
          </button>
        </a>
      ) : (
        <a
          href={linkUrl}
          className={LinkStyle.aBtn}
          {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          <button
            className={LinkStyle.btn}
            style={{
              backgroundColor:
                styleData.FilledButtonStyle.buttonBackgroundColor || "#0A0A0A",
              color: styleData.FilledButtonStyle.buttonTextColor || "#EBEBE3",
              border: "none",
            }}
          >
            {linkText}
            <img src={LightArrow} alt="Arrow" className={LinkStyle.arrowIcon} />
          </button>
        </a>
      )}
    </div>
  );
}

export default LinkComponent;

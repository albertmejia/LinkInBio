import React from "react";
import { Link } from "react-router-dom";
import { linksData, styleData } from "../linksData";

function ProfileImage({ linkToHome = false }) {
  const profileImageSrc = linksData.profileImage;

  if (!profileImageSrc || profileImageSrc === "Please Provide Profile Image") {
    return null;
  }

  const imageElement = (
    <img
      src={profileImageSrc}
      alt="Profile"
      className="img"
      style={{
        borderRadius: styleData.ProfileImageBorderRadius || "0.75rem",
      }}
    />
  );

  if (linkToHome) {
    return <Link to="/">{imageElement}</Link>;
  }

  return imageElement;
}

export default ProfileImage;

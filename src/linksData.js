import { resolveProfileImagePath } from "./utility/ResolveProfileImagePath";

// Customizable data, provide hex codes of the colors
export const styleData = {
  AppBackgroundColor: "#FAFAF7",
  LogoColor: "",
  ProfileImageBorderRadius: "",
  NameColor: "",
  DesignationColor: "",
  OutlineButtonStyle: {
    buttonBackgroundColor: "",
    buttonTextColor: "#1F1F1F",
    buttonBorderColor: "",
  },
  FilledButtonStyle: {
    buttonBackgroundColor: "#1F1F1F",
    buttonTextColor: "#FAFAF7",
  },
};

// Can be a URL, a full file name with extension, or just a file name without extension
const profileImagePath = "https://i1.sndcdn.com/avatars-JgkdU2eeqygw7bee-doBUwg-t1080x1080.jpg";

export const linksData = {
  logo: "Lnk",
  profileImage: resolveProfileImagePath(profileImagePath),
  // name: "Summer's Over",
  // designation: "Designer & Web Developer",
  links: [
    {
      linkText: "SoundCloud",
      linkUrl: "https://soundcloud.com/summers-over",
      linkBtn: "Filled",
    },
    {
      linkText: "Bandcamp",
      linkUrl: "https://summersover.bandcamp.com",
      linkBtn: "Filled",
    },
    {
      linkText: "YouTube",
      linkUrl: "https://www.youtube.com/@summers_over_tv",
      linkBtn: "Filled",
    },
    {
      linkText: "Instagram",
      linkUrl: "https://www.instagram.com/_summers_over_/",
      linkBtn: "Filled",
    },
    {
      linkText: "email",
      linkUrl: "mailto:hello@summers-over.com",
      linkBtn: "Filled",
    },
  ],
};

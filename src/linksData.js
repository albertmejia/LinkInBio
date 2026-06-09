import { resolveProfileImagePath } from "./utility/ResolveProfileImagePath";
import soWordmark from "./assets/SO-wordmark.png";

// Customizable data, provide hex codes of the colors
export const styleData = {
  AppBackgroundColor: "#080808",
  LogoColor: "",
  ProfileImageBorderRadius: "",
  NameColor: "",
  DesignationColor: "",
  OutlineButtonStyle: {
    buttonBackgroundColor: "transparent",
    buttonTextColor: "#f5f5f5",
    buttonBorderColor: "#f5f5f5",
  },
  FilledButtonStyle: {
    buttonBackgroundColor: "#1F1F1F",
    buttonTextColor: "#FAFAF7",
  },
};

// Can be a URL, a full file name with extension, or just a file name without extension
const profileImagePath = "profile";

export const linksData = {
  logo: "summers over",
  profileImage: resolveProfileImagePath(profileImagePath),
  // wordmark: filename (without extension) placed in src/assets/profileImage/
  // Imported wordmark from src/assets
  wordmark: soWordmark,
  // name: "Summer's Over",
  // designation: "Designer & Web Developer",
  links: [
    {
      linkText: "Downloads",
      linkUrl: "/downloads",
      linkBtn: "Filled",
      group: "Music",
    },
    {
      linkText: "SoundCloud",
      linkUrl: "https://soundcloud.com/summers-over",
      linkBtn: "Filled",
      group: "Music",
    },
    {
      linkText: "Apple Music",
      linkUrl: "https://music.apple.com/us/artist/summers-over/1896312168",
      linkBtn: "Filled",
      group: "Music",
    },
    {
      linkText: "Spotify",
      linkUrl: "https://open.spotify.com/artist/0hqHmmWsrBiFfjAMytdDFi",
      linkBtn: "Filled",
      group: "Music",
    },
    {
      linkText: "Bandcamp",
      linkUrl: "https://summersover.bandcamp.com",
      linkBtn: "Filled",
      group: "Music",
    },
    {
      linkText: "YouTube",
      linkUrl: "https://www.youtube.com/@summers_over_tv",
      linkBtn: "Filled",
      group: "Music",
    },
    {
      linkText: "Instagram",
      linkUrl: "https://www.instagram.com/_summers_over_/",
      linkBtn: "Filled",
      group: "Socials",
    },
    {
      linkText: "Tik Tok",
      linkUrl: "https://www.tiktok.com/@_summers_over_",
      linkBtn: "Filled",
      group: "Socials",
    },
    {
      linkText: "email",
      linkUrl: "mailto:hello@summers-over.com",
      linkBtn: "Filled",
      group: "Contact",
    },
  ],
};

export const downloadsData = [
  {
    title: "infact",
    url: "https://hypeddit.com/summersover/infact",
  },
  {
    title: "Don Toliver, Nav, Gunna - Lemonade [house remix]",
    url: "https://hypeddit.com/summersover/lemonade",
  },
  {
    title: "Blowin' Up My Line - Jess Connelley - Mine [remix]",
    url: "https://hypeddit.com/summersover/blowinupmyline",
  },
  {
    title: "Yeek - Stayin' Low [remix]",
    url: "https://hypeddit.com/summersover/stayinlow",
  },
  {
    title: "Naomi Sharon - If This Is Love [remix]",
    url: "https://hypeddit.com/summersover/ifthisislove",
  },
  {
    title: "Pimmie — Bet [edit]",
    url: "https://hypeddit.com/summersover/pimmie-bet",
  },
];

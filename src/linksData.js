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
      linkUrl: "https://open.spotify.com/artist/7cINwzGZA1cbN0Oe6zvhOS",
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
    slug: "2hard4theradio-remix",
    title: "2HARD4THERADIO [remix]",
    url: "/downloads/summers%20over%20-%202HARD4THERADIO%20Remix.wav",
    previewEmbedUrl: '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay; encrypted-media" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2340950060&color=%235cbf6f&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/summers-over" title="summers over" target="_blank" style="color: #cccccc; text-decoration: none;">summers over</a> · <a href="https://soundcloud.com/summers-over/2hard4theradio" title="2HARD4THERADIO [remix][verse intro]" target="_blank" style="color: #cccccc; text-decoration: none;">2HARD4THERADIO [remix][verse intro]</a></div>',
  },
  {
    slug: "infact",
    title: "infact",
    url: "/downloads/summers%20over%20-%20infact.wav",
    previewEmbedUrl: '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay; encrypted-media" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2329716896&color=%235cbf6f&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/summers-over" title="summers over" target="_blank" style="color: #cccccc; text-decoration: none;">summers over</a> · <a href="https://soundcloud.com/summers-over/infact" title="infact" target="_blank" style="color: #cccccc; text-decoration: none;">infact</a></div>',
  },
  {
    slug: "lemonade-house-remix",
    title: "Don Toliver, Nav, Gunna - Lemonade [house remix]",
    url: "/downloads/summers-over%20-%20lemonade%20remix.wav",
    previewEmbedUrl: '<iframe style="border: 0; width: 350px; height: 470px;" src="https://bandcamp.com/EmbeddedPlayer/album=1766371126/size=large/bgcol=333333/linkcol=2ebd35/tracklist=false/track=2027774483/transparent=true/" seamless><a href="https://summersover.bandcamp.com/album/remixes-edits">[remixes|edits] by summers over</a></iframe>',
  },
  {
    slug: "blowin-up-my-line-remix",
    title: "Blowin' Up My Line - Jess Connelley - Mine [remix]",
    url: "/downloads/summers%20over%20-%20jcon%20-%20know%20ya%20mine%20remix.wav",
    previewEmbedUrl: '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay; encrypted-media" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2235853655&color=%235cbf6f&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/summers-over" title="summers over" target="_blank" style="color: #cccccc; text-decoration: none;">summers over</a> · <a href="https://soundcloud.com/summers-over/blowin-up-my-line-jess-connelly-mine-edit" title="Blowin&#x27; Up My Line (Jess Connelly - Mine Remix)" target="_blank" style="color: #cccccc; text-decoration: none;">Blowin&#x27; Up My Line (Jess Connelly - Mine Remix)</a></div>',
  },
  {
    slug: "stayin-low-remix",
    title: "Yeek - Stayin' Low [remix]",
    url: "/downloads/summers%20over%20-%20Yeek%20-%20Stayin%27%20Low%20Remix.wav",
    previewEmbedUrl: '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay; encrypted-media" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2283115805&color=%235cbf6f&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/summers-over" title="summers over" target="_blank" style="color: #cccccc; text-decoration: none;">summers over</a> · <a href="https://soundcloud.com/summers-over/yeek-stayin-low-summers-over-1" title="Yeek - Stayin&#x27; Low [remix]" target="_blank" style="color: #cccccc; text-decoration: none;">Yeek - Stayin&#x27; Low [remix]</a></div>',
  },
  {
    slug: "if-this-is-love-remix",
    title: "Naomi Sharon - If This Is Love [remix]",
    url: "/downloads/summers%20over%20-%20Naomi%20Sharon%20-%20If%20This%20Is%20Love%20Remix.wav",
    previewEmbedUrl: '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay; encrypted-media" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2272978772&color=%235cbf6f&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/summers-over" title="summers over" target="_blank" style="color: #cccccc; text-decoration: none;">summers over</a> · <a href="https://soundcloud.com/summers-over/naomi-sharon-if-this-is-love" title="Naomi Sharon - If This Is Love [remix]" target="_blank" style="color: #cccccc; text-decoration: none;">Naomi Sharon - If This Is Love [remix]</a></div>',
  },
  {
    slug: "pimmie-bet-edit",
    title: "Pimmie — Bet [edit]",
    url: "/downloads/summers%20over%20-%20Pimmie%20-%20Bet%20Remix.wav",
    previewEmbedUrl: '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay; encrypted-media" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2259856319&color=%235cbf6f&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/summers-over" title="summers over" target="_blank" style="color: #cccccc; text-decoration: none;">summers over</a> · <a href="https://soundcloud.com/summers-over/pimmie-bet-summers-over-edit" title="Pimmie - Bet [edit]" target="_blank" style="color: #cccccc; text-decoration: none;">Pimmie - Bet [edit]</a></div>',
  },
];
